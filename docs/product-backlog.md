# Product backlog

Prepared October 29, 2026. The 12 story statements, acceptance criteria, priorities, sprint assignments, and points below are transcribed from source sections 3.3–3.5. Short card titles are editorial summaries. No story is Done. **63 SP total: 21 SP in each sprint; 9 Must and 3 Should.** Points remain original estimates, not confirmed capacity for the shortened sprints.

The source specifies sprint work-package leads, not a single owner for each story. The contacts below are **proposed coordination contacts pending Developers' agreement**, based on those responsibilities. They are not evidence of accepted assignments or Trello membership.

| Rank / ID | Card title | Priority | Sprint | SP | Proposed contact | Due date |
|---|---|---|---|---:|---|---|
| 1 / US01 | Select study zones on a floor map | Must | 1 | 5 | Merey Amangeldi | 2026-10-31 |
| 2 / US02 | Submit noise and outlet reports | Must | 1 | 5 | Askhat Rakhmetollayev | 2026-10-31 |
| 3 / US03 | Find quiet zones with available power | Must | 1 | 5 | Merey Amangeldi | 2026-10-31 |
| 4 / US04 | Read responsive zone status details | Must | 1 | 6 | Merey Amangeldi | 2026-10-31 |
| 5 / US05 | Restrict contributions to eligible campus requests | Must | 2 | 8 | Tamerlan Khassenov | 2026-11-06 |
| 6 / US06 | Expire reports after 45 minutes | Must | 2 | 5 | Tamerlan Khassenov | 2026-11-06 |
| 7 / US07 | Keep report updates predictable | Must | 2 | 5 | Tamerlan Khassenov | 2026-11-06 |
| 8 / US08 | Explain eligibility and error states | Should | 2 | 3 | Askhat Rakhmetollayev | 2026-11-06 |
| 9 / US09 | Offer a voluntary three-second noise estimate | Should | 3 | 8 | Askhat Rakhmetollayev | 2026-11-12 |
| 10 / US10 | Preserve sampling privacy and manual fallback | Must | 3 | 5 | Asanali Yessenbekov | 2026-11-12 |
| 11 / US11 | Explain estimate uncertainty | Should | 3 | 5 | Aldiyar Gaisa | 2026-11-12 |
| 12 / US12 | Make the pilot release repeatable | Must | 3 | 3 | Asanali Yessenbekov | 2026-11-12 |

Due dates are sprint-end target dates from the user's schedule. Trello uses 23:59 UTC+05:00 (18:59 UTC) as an administrative end-of-day convention; the source does not specify a time. Initial evidence status for original story completion is **Planned**, except implementation verification explicitly blocked by the current prototype-only scope. Card creation or design completion alone does not change story completion status.

## US01 — Select study zones on a floor map

**Story:** As a student, I want a floor map to locate study zones.

**Original acceptance:** Accept when all pilot zones can be selected on the correct floor and opened by keyboard.

**Prototype evidence to collect:** Floor selection, linked zone details, labeled schematic and responsive design. Keyboard operation must be checked in the actual presentation environment; visual focus styling alone does not prove keyboard access.

## US02 — Submit noise and outlet reports

**Story:** As a contributor, I want to report noise and outlets.

**Original acceptance:** Accept when valid categories save, invalid values fail and zone details show the submitted values.

**Prototype evidence to collect:** Manual category selection, validation examples, submission feedback and updated example zone details. Saving and rejecting actual persisted data remain unverified without implementation.

## US03 — Find quiet zones with available power

**Story:** As an interview candidate, I want quiet zones with power.

**Original acceptance:** Accept when the combined filter includes only Quiet zones with Available outlets and explains an empty result.

**Prototype evidence to collect:** A filtered demonstration state and an empty-result state. Exclude Moderate, Loud, Unknown, expired noise, and unavailable or unknown outlet observations.

## US04 — Read responsive zone status details

**Story:** As a visitor, I want readable status details.

**Original acceptance:** Accept when the map works at 360-pixel width and shows category text, report time and an Unknown state.

**Prototype evidence to collect:** A 360-pixel web layout showing category labels, separate observation times, and Unknown. A narrow Figma frame is layout evidence, not a complete accessibility audit.

## US05 — Restrict contributions to eligible campus requests

**Story:** As a user, I want eligible campus contributions.

**Original acceptance:** Accept when the server allows a verified campus request, rejects an external request and ignores spoofed client eligibility.

**Prototype evidence to collect:** Clearly simulated eligible and blocked states with a next action. **Original server verification: Blocked by prototype-only scope**; campus IT agreement is not assumed. Do not suggest a browser SSID check proves eligibility or location.

## US06 — Expire reports after 45 minutes

**Story:** As a student, I want old reports removed from live results.

**Original acceptance:** Accept when a report expires at age 45 minutes on both map and filter, using server time.

**Prototype evidence to collect:** A 44:59 fresh example and a 45:00 expired/Unknown example, including removal from the Quiet + Available filter. Noise and outlet observations expire independently. **Server-time enforcement: Blocked by prototype-only scope.**

## US07 — Keep report updates predictable

**Story:** As a user, I want predictable report updates.

**Original acceptance:** Accept when the newest accepted report wins, repeated requests do not duplicate records and rate limits reject excess writes.

**Prototype evidence to collect:** Latest-report presentation, duplicate/retry feedback, and rate-limit explanation. **Atomic ordering, idempotency, and write-limit verification: Blocked by prototype-only scope.**

## US08 — Explain eligibility and error states

**Story:** As a contributor, I want clear eligibility and error messages.

**Original acceptance:** Accept when blocked and expired states explain the next action and remain usable without color cues.

**Prototype evidence to collect:** Text and icon labels for blocked/expired states with links to retry, return to the map, or submit a new report as appropriate.

## US09 — Offer a voluntary three-second noise estimate

**Story:** As a contributor, I want a three-second noise estimate.

**Original acceptance:** Accept when an explicit tap starts local processing after consent, then stops every microphone track.

**Prototype evidence to collect:** If retained, label consent/progress/result screens as a simulated optional flow. **Actual capture and track cleanup: Blocked by prototype-only scope.** Do not request microphone access just to demonstrate a design.

## US10 — Preserve sampling privacy and manual fallback

**Story:** As a privacy-conscious user, I want control over sampling.

**Original acceptance:** Accept when denial or cancellation leaves manual reporting available and network inspection finds no audio upload.

**Prototype evidence to collect:** Manual reporting remains accessible after a represented denial or cancellation. **Original network-inspection criterion: Unverified; no implementation is present to assess.** US10 remains mandatory whenever real sampling is enabled.

## US11 — Explain estimate uncertainty

**Story:** As a student, I want an understandable estimate.

**Original acceptance:** Accept when pilot devices are compared with observer labels and the interface identifies an uncalibrated estimate.

**Prototype evidence to collect:** An explicit uncalibrated-estimate label if a sampling view is shown. **Device comparison: Planned only, with no observations collected or claimed.** The source target is 30 samples over three device models and three noise categories, aiming for 80% agreement; these are not results.

## US12 — Make the pilot release repeatable

**Story:** As a maintainer, I want a repeatable pilot release.

**Original acceptance:** Accept when the release passes the core reporting regression, has setup instructions and supports rollback.

**Prototype evidence to collect:** Verified prototype opening instructions, saved version, walkthrough, and documented limitations. **Pilot regression and deployment rollback: Blocked by prototype-only scope.** A saved Figma version is not production rollback evidence.

## Dependencies and changes

US01 precedes map-based reporting and filtering. US05 needs a trusted campus route. US09 depends on a working report API and US11 on US09. If sampling fails privacy or quality gates, it stays disabled and manual reporting remains available. Retain these source dependencies even where implementation is deferred.

The proposed Social GPA rewards and campus analytics views are additional requests in the current brief. Track them as design scope changes linked to the [change log](change-log.md), not as invented US13/US14 or falsely attributed source stories. University approval for rewards is outstanding.
