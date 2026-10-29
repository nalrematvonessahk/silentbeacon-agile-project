param(
    [Parameter(Mandatory = $true)][string]$SourceDocx,
    [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [IO.Compression.ZipFile]::OpenRead($SourceDocx)
try {
    $reader = [IO.StreamReader]::new($archive.GetEntry('word/document.xml').Open())
    try { [xml]$sourceXml = $reader.ReadToEnd() } finally { $reader.Dispose() }
} finally { $archive.Dispose() }
$ns = [Xml.XmlNamespaceManager]::new($sourceXml.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$paragraphs = @($sourceXml.SelectNodes('//w:body//w:p', $ns) | ForEach-Object {
    ($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.'#text' }) -join ''
})
$stories = @($paragraphs | Where-Object { $_ -match '^As (a|an) .+ Accept when ' })
$backlog = Get-Content -Raw -Encoding UTF8 -LiteralPath (Join-Path $ProjectRoot 'docs/product-backlog.md')
$missingSourceText = @()
foreach ($story in $stories) {
    $parts = $story -split ' Accept when ', 2
    foreach ($piece in @($parts[0], ('Accept when ' + $parts[1]))) {
        if (-not $backlog.Contains($piece)) { $missingSourceText += $piece }
    }
}
$required = @('README.md','docs/project-vision.md','docs/product-backlog.md','docs/sprint-plan.md','docs/team-roles.md','docs/definition-of-done.md','docs/risk-register.md','docs/sprint-reviews.md','docs/retrospectives.md','docs/communication-plan.md','docs/decision-log.md','docs/evidence-checklist.md','docs/change-log.md')
$missingFiles = @($required | Where-Object { -not (Test-Path -LiteralPath (Join-Path $ProjectRoot $_)) })
$brokenLinks = @()
foreach ($file in Get-ChildItem -LiteralPath $ProjectRoot -Filter '*.md' -Recurse) {
    $content = Get-Content -Raw -Encoding UTF8 -LiteralPath $file.FullName
    foreach ($match in [regex]::Matches($content, '\]\(([^)]+)\)')) {
        $target = $match.Groups[1].Value
        if ($target -match '^(https?:|#|mailto:)') { continue }
        $target = ($target -split '#',2)[0]
        if ($target -and -not (Test-Path -LiteralPath (Join-Path $file.DirectoryName $target))) {
            $brokenLinks += ($file.Name + ' -> ' + $target)
        }
    }
}
$result = [ordered]@{
    validation_kind = 'Documentation integrity only; not product acceptance tests'
    source_story_count = $stories.Count
    exact_story_and_acceptance_text_preserved = ($stories.Count -eq 12 -and $missingSourceText.Count -eq 0)
    missing_source_text = $missingSourceText
    required_document_count = $required.Count
    missing_files = $missingFiles
    broken_relative_links = $brokenLinks
    passed = ($stories.Count -eq 12 -and $missingSourceText.Count -eq 0 -and $missingFiles.Count -eq 0 -and $brokenLinks.Count -eq 0)
}
$result | ConvertTo-Json -Depth 6
if (-not $result.passed) { exit 1 }
