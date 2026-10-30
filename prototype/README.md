# SilentBeacon local interactive demonstration

This is a **supplementary browser prototype**, not the Figma file, a deployed system, a university-approved campus map, or evidence that the original implementation user stories are complete. The Figma integration was unavailable at its Starter-plan call limit when this local prototype was prepared.

## Run locally

Open [dist/index.html](dist/index.html) directly in a current desktop or mobile browser. JavaScript must be enabled. The page uses only local HTML, CSS and JavaScript; no installation, build process, account, microphone permission, internet connection, or server is required. Refresh resets all demonstration state.

From the project folder, optionally run `node --test prototype/model.test.cjs` to check the demonstration's 30-minute boundary, independent expiry, filtering, submission validation, and ten schematic zones. These are tests of the local prototype model only, not server, privacy, security, production, or team acceptance tests.

An additional `node prototype/ui-smoke.cjs` exercises routing, a Z10 report, the expiry boundary, and the no-results filter using simulated DOM stubs. It does not render a page. Visual, responsive and real browser click-through checks remain unperformed: the available browser's local-preview safety check rejected the connection. The local preview server used for an HTTP 200 readiness check was stopped.

## Demonstration sequence

1. Open **Explore the campus map**, choose either floor, and select any of the ten fictional zones. Noise and outlet values are example observations.
2. Use Quiet and Available outlet filters. Unknown and expired observations do not match.
3. Open a zone's **Explore expiry state**, set noise age to 29:59, and advance one second. The outlet's separate timestamp may remain fresh.
4. Add an example report, select categories, and submit. The simulated receipt and zone update are kept in the open browser page's memory only. The blocked example does not inspect your network.
5. View proposed rewards and campus insights. Rewards are simulated and subject to university approval; analytics are computed from synthetic zone states and are not measured campus findings.

## Limits

No accounts, persistent storage, real report verification, campus network eligibility, networked server, microphone capture, hardware sensors, background timer, push updates, official floor plan or reward awards are provided. Report freshness changes when the demo clock is advanced; it is not server-time enforcement. Original implementation acceptance criteria remain unverified. The site is locally prepared and not published.
