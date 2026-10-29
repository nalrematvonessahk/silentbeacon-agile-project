# SilentBeacon NoiseMap

SilentBeacon is an academic, responsive web prototype for crowdsourced campus noise and power-outlet reporting at **Astana IT University**. It demonstrates how students could choose study zones and how a five-person team organizes Agile delivery. It is not a deployed production service.

**Course:** Project Management · **Team:** SE-2416 · **Final defense:** November 13, 2026

## Current delivery record

Documentation prepared on **October 29, 2026**, from `SilentBeacon_Agile_Project_Plan_SE2416.docx` and the user's current execution brief. These documents record plans and templates, not evidence of past implementation, meetings, interviews, tests, or team approval. No user story is certified Done by this documentation.

The private Trello board has been created and read back: **seven lists, twelve story cards, twelve native checklists and 48 unchecked proposed tasks**. Four Sprint 1 cards are in Sprint Backlog as a draft forecast; eight are in Product Backlog. Done is empty and no card due date is marked complete. The [initial verification record](evidence/trello-verification.json) and [story/task data](trello/story-task-data.json) are historical setup snapshots. The [later board audit](evidence/trello-final-audit-2026-10-29.json) records the GitHub links added to all twelve stories.

| Resource | Verified location |
|---|---|
| Trello — SilentBeacon — Agile Project Management \| SE-2416 | [Private board](https://trello.com/b/cn7omEzN/silentbeacon-agile-project-management-se-2416) |
| Figma — SilentBeacon — Web Prototype | [Editable Figma file](https://www.figma.com/design/spEnordZysj72nrb1p28kb) — eight required views and five supporting states, each at 1280px and 360px; 174 navigation reactions configured |
| GitHub — silentbeacon-agile-project | [Private repository](https://github.com/nalrematvonessahk/silentbeacon-agile-project), created October 29, 2026; check the repository for its current contents |

The links above are real platform resources. No teammate invitations or sharing changes have been made. Do not publish or share resources without the user's authorization.

Figma contains 26 editable frames with reusable components and semantic design tokens. The designs were visually inspected; prototype reactions were configured and inspected structurally. A human walkthrough in Present mode, keyboard checks and second-member approval remain pending. Report categories and submission outcomes are preset demonstration scenarios, not live inputs. The file was created in default Drafts; its sharing ACL could not be independently inspected through the integration.

A separate [local interactive demonstration](prototype/README.md) supplements the Figma file with selectable details for ten schematic zones and client-side examples. It is not a shared reporting service or proof of the original implementation acceptance criteria. Browser visual and click-through verification could not be performed because access to the local preview was declined; model tests are limited to the simulated behavior.

All 13 documentation files passed [source-text and relative-link validation](evidence/documentation-validation.json). This check concerns documentation integrity, not product acceptance or team review.

## Scope and honesty of evidence

The prototype covers a landing page, campus floor map, zone details, report submission, verification status, proposed Social GPA rewards, a campus analytics dashboard, and expired/Unknown states. All example campus reports and analytics must say **demonstration data**. Any floor plan without university approval must say **schematic, not an official campus layout**.

Social GPA rewards are **simulated, proposed, and subject to university approval**. No real rewards are issued. No physical IoT sensor functionality is included. Noise categories are Quiet, Moderate, Loud, and Unknown; outlet categories are Available, None available, and Unknown. Each observation expires at age 45 minutes in the represented product behavior.

The source plan includes server enforcement, microphone processing, field studies, and a pilot release. Those original acceptance criteria remain visible in the [backlog](docs/product-backlog.md), but a Figma screen cannot prove them. The [change log](docs/change-log.md) records the current prototype-only scope and shortened schedule without rewriting the source as completed work.

## Project documentation

- [Project vision](docs/project-vision.md)
- [Product backlog and story traceability](docs/product-backlog.md)
- [Sprint plan and capacity reconciliation](docs/sprint-plan.md)
- [Team roles](docs/team-roles.md)
- [Definition of Done](docs/definition-of-done.md)
- [Risk register](docs/risk-register.md)
- [Sprint Review templates](docs/sprint-reviews.md)
- [Retrospective templates](docs/retrospectives.md)
- [Communication plan](docs/communication-plan.md)
- [Decision log template](docs/decision-log.md)
- [Changes from the source plan](docs/change-log.md)
- [Final defense evidence checklist](docs/evidence-checklist.md)
- [Russian defense walkthrough](docs/defense-runbook-ru.md)
- [Figma screen links, presentation guide and verification limits](design/README.md)
- [Execution evidence summary](evidence/execution-summary.json)
- [Updated editable defense presentation draft](SilentBeacon_Defense_Ready_Draft.pptx)

## Workflow

Use one Trello card per stable story ID. Move work through **Product Backlog → Sprint Backlog → To Do → In Progress → Review → Testing → Done**. Sprint selection is a team forecast, not proof that work has started. Keep at most three implementation cards In Progress and two in Review, as proposed in the source plan. Discuss a card waiting more than one working day at the next Daily Scrum.

Link actual Figma nodes, review notes, and verification results to their story cards. Record each event on its actual date. Team members review changes before accepting completion. Do not backdate work to the start of Sprint 1, infer attendance from roles, or convert story points into hours.

## Defense demonstration

Show the board and story-to-screen traceability; follow the prototype from the map to reporting and verification; explain 44:59 versus 45:00 expiry and Unknown; show the clearly labeled rewards and analytics examples; then present real reviews, retrospectives, and unresolved risks. If a required record does not exist, report its status honestly.
