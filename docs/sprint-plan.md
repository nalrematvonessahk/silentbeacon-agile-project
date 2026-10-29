# Sprint plan

Prepared October 29, 2026. User-specified dates supersede the source's proposed two-week calendar. Sprint starts are schedule dates, not evidence of work having begun on those dates.

| Period | Exact dates in 2026 | Source stories / points | Source Sprint Goal | Prototype interpretation for team review |
|---|---|---|---|---|
| Sprint 1 | October 26–31 | US01–US04 / 21 SP | A student can find a pilot zone using current manual noise and outlet reports | Demonstrate floor selection, zone details, manual reporting and combined filtering with labeled sample data |
| Sprint 2 | November 1–6 | US05–US08 / 21 SP | Trustworthy, recent reports | Demonstrate eligibility feedback, predictable update/error states and 45-minute expiry; server enforcement remains unverified |
| Sprint 3 | November 7–12 | US09–US12 / 21 SP | Voluntary noise estimation without audio storage or upload | Review optional sampling representation and manual fallback, finish prototype documentation and rehearse the defense; no actual sampling or release is asserted |
| Final defense | November 13 | Demonstration and evidence | Academic assessment | Show actual artifacts, decisions, checks and remaining limitations |

Proposed Reviews and Retrospectives: October 31, November 6, and November 12. Meeting times and attendance are not set. Use actual event dates if these targets change. No October 26 planning meeting is asserted or reconstructed.

## Capacity reconciliation

Source assumptions: 12 hours per person per week; 24 per person per **two-week** sprint; five members; 120 hours per sprint, split into 90 delivery, 20 coordination and 10 contingency. Total forecast: 360 hours (270 delivery, 60 coordination, 30 contingency). Each of the 15 source work packages below was estimated at 18 delivery hours.

Those assumptions do not establish capacity for six-day sprints. **Revised capacity is unconfirmed.** Do not transplant 120 hours to each shortened sprint, divide points into hours, or label 21 SP an achieved velocity. Each member should state available hours for the remaining dates; Developers then select a feasible prototype forecast, accounting for ceremonies and contingency. Source estimates remain for traceability, not new commitments.

| Member | Sprint 1 remaining availability | Sprint 2 availability | Sprint 3 availability | Confirmed on |
|---|---|---|---|---|
| Aldiyar Gaisa | To confirm | To confirm | To confirm | — |
| Askhat Rakhmetollayev | To confirm | To confirm | To confirm | — |
| Tamerlan Khassenov | To confirm | To confirm | To confirm | — |
| Merey Amangeldi | To confirm | To confirm | To confirm | — |
| Asanali Yessenbekov | To confirm | To confirm | To confirm | — |

## Original work packages

The following is a faithful preservation of source task leads and work, **not a new instruction to build backend infrastructure** and not completed activity. All 15 had a source estimate of 18 hours each. Developers must reconcile these with prototype scope before treating them as selected sprint tasks.

| ID | Source lead | Source work |
|---|---|---|
| S1 T1 | Aldiyar | Confirm pilot zones and acceptance examples; prepare labels, write API checks and help with integration. Campus walkthrough and repository. |
| S1 T2 | Askhat | Set up application, deployment preview and report form; review map integration. Development workstation and test environment. |
| S1 T3 | Tamerlan | Create zone and report schema, read/write API and server timestamps. Database and local API test client. |
| S1 T4 | Merey | Build SVG floor selector, zone panel and combined filter with text labels. Approved schematic and browser. |
| S1 T5 | Asanali | Build test fixtures, check small screens and keyboard flow, run a five-user task trial and triage defects. Test devices. |
| S2 T1 | Aldiyar | Agree campus eligibility policy, clarify edge cases, implement contract checks and evaluate review tasks. Campus IT input and API fixtures. |
| S2 T2 | Askhat | Implement eligible and blocked form states, refresh handling and retry feedback. Browser and staging environment. |
| S2 T3 | Tamerlan | Enforce server network checks, timestamp expiry, atomic updates and write limits. Trusted gateway and database. |
| S2 T4 | Merey | Show status age, expired states and refreshed filter results; improve usability from Sprint 1 feedback. Map interface and devices. |
| S2 T5 | Asanali | Test time boundaries, concurrent writes, duplicate submissions and external access; run field regression. Fake clock and two network routes. |
| S3 T1 | Aldiyar | Define calibration protocol, compare observer labels and results, assist release checks and write user guidance. Volunteers and test logs. |
| S3 T2 | Askhat | Implement capture lifecycle and cancellation; check cleanup on errors and tab changes. Browser microphone API and devices. |
| S3 T3 | Tamerlan | Implement local signal aggregation and summary submission; verify payload restrictions and release configuration. Web Audio and staging API. |
| S3 T4 | Merey | Build consent, progress, estimated category and fallback interface; fix observed usability issues. Browser and design prototype. |
| S3 T5 | Asanali | Run browser, permission and privacy tests; execute pilot regression, document defects and rehearse rollback. Test devices and network inspector. |

## Board rules

Use the requested lists: Product Backlog, Sprint Backlog, To Do, In Progress, Review, Testing, Done. Product Backlog contains the ordered requirements. The four Sprint 1 cards are initially staged in Sprint Backlog as a **draft forecast pending Developers' agreement**, preserving the source assignment without claiming actual team selection. After planning, record selection and capacity explicitly. To Do contains ready tasks; In Progress requires actual work; Review requires a concrete artifact; Testing requires an explicit verification target; Done requires the agreed completion evidence.

Trello due times use 23:59 UTC+05:00 on the sprint end date as an administrative convention, not a source-defined meeting or deadline time. Four proposed checklist items per story are a prototype task breakdown, separate from the 15 original work packages; unchecked checklist items do not imply work has started.

Keep original stories visible when only prototype tasks are completed. Record scope decisions on the card and in the decision log. Do not move an implementation story to Done merely because its screen exists. Unfinished work returns to the Product Backlog with remaining scope and reason, without erasing its history.

## Proposed review demonstrations

1. Sprint 1: open a floor, choose a zone, submit a simulated manual report, apply Quiet + Available outlets, and inspect its timestamp. Include an empty-result example and 360-pixel layout.
2. Sprint 2: inspect simulated eligibility feedback, compare 44:59 and 45:00 states, show independent noise/outlet freshness and a filter that excludes expired values. Explain that server verification is not implemented.
3. Sprint 3: show manual fallback and any clearly simulated sampling states; demonstrate the eight required views, proposed rewards and example analytics; inspect documentation, remaining defects, and final evidence.

These are agendas, not completed reviews or test results.
