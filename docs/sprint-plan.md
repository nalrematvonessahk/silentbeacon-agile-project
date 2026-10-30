# Sprint plan

Prepared October 29, 2026; replanned October 30 following the user's instruction to use the endterm report's nine weeks, with work continuing after the November 13 defense. The prior shortened and six-week plans are historical. Sprint starts are schedule dates, not evidence of work or meetings on those dates.

| Period | Exact dates in 2026 | Source stories / points | Source Sprint Goal | Prototype interpretation for team review |
|---|---|---|---|---|
| Sprint 1 | October 23–November 12 | US01–US04 / 21 SP | A student can find a pilot zone using current manual noise and outlet reports | Demonstrate floor selection, zone details, manual reporting and combined filtering with labeled sample data |
| Sprint 2 | November 13–December 3 | US05–US08 / 21 SP | Trustworthy, recent reports | Demonstrate eligibility feedback, predictable update/error states and 30-minute expiry; defense is November 13 and server enforcement remains unverified |
| Sprint 3 | December 4–24 | US09–US12 / 21 SP | Demonstrate aggregated campus insights and reward-flow clarity | Review the proposed reward states, aggregated demonstration data, usability and remaining work after defense; no real rewards or release are asserted |
| Final defense | November 13 | Demonstration and evidence | Academic assessment | Show actual artifacts, decisions, checks and remaining limitations |

Proposed Reviews and Retrospectives: November 12, December 3 and December 24. The defense on November 13 is a separate checkpoint during Sprint 2. Meeting times and attendance are not set. Use actual event dates if these targets change. The report's proposed planning period of October 16–22 is not evidence of a meeting.

## Capacity reconciliation

The endterm report proposes 8 hours per person per week for nine sprint weeks. Five members yield 40 person-hours per week, 120 per three-week sprint and 360 in total. Per sprint the proposal allocates 90 hours delivery, 21 hours Scrum/refinement and 9 contingency; across three sprints: 270 delivery, 63 coordination and 27 contingency. Each of 15 report work packages is estimated at 18 delivery hours.

**Actual capacity is unconfirmed.** These are full-period forecasts, not completed effort or remaining availability as of October 30. The report's 21 SP per sprint is an initial ambition, not measured velocity, and points do not convert into hours. Each member should confirm available time; Developers select a feasible Sprint Backlog.

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
| S3 T1 | Aldiyar | Define campus issue scenarios, review reward rules and write demonstration guidance. |
| S3 T2 | Askhat | Build proposed reward states and check pending or rejected contribution flows. |
| S3 T3 | Tamerlan | Prepare aggregated sample issue data and verification fixtures; separate examples from live reports. |
| S3 T4 | Merey | Build the campus insights dashboard and reward indicators; refine map usability. |
| S3 T5 | Asanali | Check privacy, reward clarity and aggregated trends; run prototype tests. Defense rehearsal must be before November 13, not after it. |


## Board rules

Use the requested lists: Product Backlog, Sprint Backlog, To Do, In Progress, Review, Testing, Done. Product Backlog contains the ordered requirements. US01–US03 have assistant-created prototype drafts and are In Progress; US04 has a partial draft and is in Sprint Backlog. Their Sprint 1 allocation remains a **forecast pending Developers' agreement**. After planning, record selection and capacity explicitly. Separate operational cards describe the plan, reviews, tests and a completed board-setup artifact; these do not imply that any original story is Done or that team events occurred. To Do contains ready tasks; In Progress requires actual work; Review requires a concrete artifact; Testing requires an explicit verification target; Done requires completion evidence.

Trello due times use 23:59 UTC+05:00 on the sprint end date as an administrative convention, not a source-defined meeting or deadline time. Four proposed checklist items per story are a prototype task breakdown, separate from the 15 original work packages; unchecked checklist items do not imply work has started.

Keep original stories visible when only prototype tasks are completed. Record scope decisions on the card and in the decision log. Do not move an implementation story to Done merely because its screen exists. Unfinished work returns to the Product Backlog with remaining scope and reason, without erasing its history.

## Proposed review demonstrations

1. Sprint 1: open a floor, choose a zone, submit a simulated manual report, apply Quiet + Available outlets, and inspect its timestamp. Include an empty-result example and 360-pixel layout.
2. Sprint 2: inspect simulated eligibility feedback, compare 29:59 and 30:00 states, show independent noise/outlet freshness and a filter that excludes expired values. Explain that server verification is not implemented.
3. Sprint 3: demonstrate the eight required views, proposed rewards and example analytics; inspect documentation, remaining defects, and final evidence.

These are agendas, not completed reviews or test results. On October 30 the Figma expiry examples were updated to the 30-minute rule and the desktop and narrow expiry frames inspected; a complete Present-mode walkthrough remains pending.
