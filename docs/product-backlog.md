# Product backlog

Prepared October 29, 2026; revised October 30 from the endterm report's nine-week plan at the user's direction. The 12 story statements, acceptance criteria, priorities, sprint assignments, and points below follow the report sections 3.3–3.4. The older DOCX's different US09–US11 and 45-minute rule are recorded in the change log. Short card titles are editorial summaries. No story is Done. **63 SP total: 21 SP in each sprint; 9 Must and 3 Should.** Points remain original estimates, not confirmed capacity or measured velocity.

The source specifies sprint work-package leads, not a single owner for each story. The contacts below are **proposed coordination contacts pending Developers' agreement**, based on those responsibilities. They are not evidence of accepted assignments or Trello membership.

| Rank / ID | Card title | Priority | Sprint | SP | Proposed contact | Due date |
|---|---|---|---|---:|---|---|
| 1 / US01 | Select study zones on a floor map | Must | 1 | 5 | Merey Amangeldi | 2026-11-12 |
| 2 / US02 | Submit noise and outlet reports | Must | 1 | 5 | Askhat Rakhmetollayev | 2026-11-12 |
| 3 / US03 | Find quiet zones with available power | Must | 1 | 5 | Merey Amangeldi | 2026-11-12 |
| 4 / US04 | Read responsive zone status details | Must | 1 | 6 | Merey Amangeldi | 2026-11-12 |
| 5 / US05 | Restrict contributions to eligible campus requests | Must | 2 | 8 | Tamerlan Khassenov | 2026-12-03 |
| 6 / US06 | Expire reports after 30 minutes | Must | 2 | 5 | Tamerlan Khassenov | 2026-12-03 |
| 7 / US07 | Keep report updates predictable | Must | 2 | 5 | Tamerlan Khassenov | 2026-12-03 |
| 8 / US08 | Explain eligibility and error states | Should | 2 | 3 | Askhat Rakhmetollayev | 2026-12-03 |
| 9 / US09 | Show recognition for verified reports | Should | 3 | 8 | Askhat Rakhmetollayev | 2026-12-24 |
| 10 / US10 | Show aggregated campus issues | Must | 3 | 5 | Merey Amangeldi | 2026-12-24 |
| 11 / US11 | Show fair reward rules | Should | 3 | 5 | Aldiyar Gaisa | 2026-12-24 |
| 12 / US12 | Make the pilot release repeatable | Must | 3 | 3 | Asanali Yessenbekov | 2026-12-24 |

Due dates are sprint-end targets in the endterm report's nine-week schedule. Trello uses 23:59 UTC+05:00 (18:59 UTC) as an administrative end-of-day convention; the source does not specify a time. On October 30, US01–US03 were moved to In Progress based on assistant-created partial prototype artifacts; US04 remains in Sprint Backlog and US05–US12 in Product Backlog. No original story is Done. Actual selection and team assignments remain unconfirmed. Prototype design completion alone does not satisfy implementation acceptance criteria.

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

## US06 — Expire reports after 30 minutes

**Story:** As a student, I want old reports removed from live results.

**Original acceptance:** Accept when a report expires at age 30 minutes on both map and filter, using server time.

**Prototype evidence to collect:** A 29:59 fresh example and a 30:00 expired/Unknown example, including removal from the Quiet + Available filter. Noise and outlet observations expire independently. **Server-time enforcement: Blocked by prototype-only scope.**

## US07 — Keep report updates predictable

**Story:** As a user, I want predictable report updates.

**Original acceptance:** Accept when the newest accepted report wins, repeated requests do not duplicate records and rate limits reject excess writes.

**Prototype evidence to collect:** Latest-report presentation, duplicate/retry feedback, and rate-limit explanation. **Atomic ordering, idempotency, and write-limit verification: Blocked by prototype-only scope.**

## US08 — Explain eligibility and error states

**Story:** As a contributor, I want clear eligibility and error messages.

**Original acceptance:** Accept when blocked and expired states explain the next action and remain usable without color cues.

**Prototype evidence to collect:** Text and icon labels for blocked/expired states with links to retry, return to the map, or submit a new report as appropriate.

## US09 — Recognition for verified reports

**Story:** As a contributor, I want recognition for verified reports.

**Report acceptance:** The prototype shows pending, approved and rejected reward states without issuing real Social GPA.

**Prototype evidence to collect:** Labeled simulated pending, approved and rejected examples; state that any actual award requires university approval. Existing Figma states must be checked against these criteria.

## US10 — Aggregated campus issues

**Story:** As an administrator, I want an aggregated issue view.

**Report acceptance:** Repeated noise and outlet complaints appear without identifying contributors.

**Prototype evidence to collect:** Clearly labeled demonstration aggregates for noisy areas and outlet shortages, with no contributor identifiers. No live campus measurements or real administrative decisions are implied.

## US11 — Fair reward rules

**Story:** As a contributor, I want fair reward rules.

**Report acceptance:** Duplicate or unverified reports do not earn example rewards.

**Prototype evidence to collect:** Explicit simulated examples or messages showing that duplicate and unverified reports are ineligible. No server-enforced anti-abuse behavior is claimed.

## US12 — Make the pilot release repeatable

**Story:** As a maintainer, I want a repeatable pilot release.

**Original acceptance:** Accept when the release passes the core reporting regression, has setup instructions and supports rollback.

**Prototype evidence to collect:** Verified prototype opening instructions, saved version, walkthrough, and documented limitations. **Pilot regression and deployment rollback: Blocked by prototype-only scope.** A saved Figma version is not production rollback evidence.

## Dependencies and changes

US01 precedes map-based reporting and filtering. US05 needs a trusted campus route for real verification. Verified rewards depend on trustworthy submission rules; administrative insights depend on aggregates that do not identify contributors. University approval is outstanding for real Social GPA. The older DOCX's optional microphone and privacy stories are historical, not US09–US11 in the current report. Any optional sampling remains conceptual, with no live capture or sensor capability claimed.
