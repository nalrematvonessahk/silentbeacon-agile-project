# Definition of Done

Prepared October 29, 2026. This document preserves the source's completion standard and proposes a separate prototype deliverable standard for team agreement. No review or test is claimed as completed merely by writing this checklist.

## Original story standard

Source section 3.9 states that a story is Done when its acceptance examples pass, another member reviews the change, relevant automated and manual checks pass, and the integrated result runs in the pilot environment. User-visible states need readable labels and keyboard access. Evidence and setup notes must be recorded. No known blocker involving privacy, stale status, or unauthorized writes may remain in the release.

Original integration checks exercise the server. Release evidence includes a real commit identifier and rollback procedure. These requirements cannot be certified with a Figma mockup. Preserve incomplete implementation criteria as unverified or outside the current prototype delivery rather than silently weakening the story.

## Proposed prototype deliverable standard

- [ ] The deliverable links to its original story or an explicitly recorded design extension.
- [ ] Required desktop and narrow web layouts are editable and reviewed at intended sizes, including 360-pixel width where US04 applies.
- [ ] Main interactions reach their intended destinations; back/retry/cancel paths are checked in Figma Present mode.
- [ ] Noise and outlet categories are named in text, and Unknown is distinct from Quiet and from None available.
- [ ] Demonstrated 30-minute expiry is consistent on map, details and filters; noise and outlet freshness are independent.
- [ ] Demo reports, schematic layouts, analytics, eligibility and other simulations are clearly labeled.
- [ ] Social GPA is labeled simulated, proposed, and subject to university approval; no award is represented as earned.
- [ ] No physical IoT or production backend capability is implied.
- [ ] A second team member reviews the actual version and records their name, date, feedback and disposition.
- [ ] Verification records identify version/node links, method, expected and actual outcomes, and remaining defects.
- [ ] Relevant documentation and limitations are updated; screenshots and links refer to actual artifacts.
- [ ] No blocking prototype defect remains in the demonstrated flow.

This proposed checklist is not a claim of full WCAG conformance, server security, device calibration, audio privacy verification, or a completed pilot release. Team acceptance of this scope must be recorded before using it as a completion gate.

## Evidence record template

| Field | Value to record |
|---|---|
| Story / deliverable ID | |
| Actual verification date and verifier | |
| Artifact URL and version/node/commit | |
| Acceptance criterion | |
| Method and environment | |
| Expected outcome | |
| Actual outcome | |
| Evidence link | |
| Reviewer and review date | |
| Defects / limitations | |
| Completion decision and authority | |
