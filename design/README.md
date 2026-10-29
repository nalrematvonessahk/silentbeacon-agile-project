# SilentBeacon Web Prototype

[Open the editable Figma file](https://www.figma.com/design/spEnordZysj72nrb1p28kb). Created on 29 October 2026 in the authenticated user's default drafts. No invitations or sharing changes were made. The connector does not expose an independently verified private access-control list.

## What exists

The actual Figma file contains 26 native editable frames: eight required screens and five supporting scenario states, each in 1280px desktop and 360px responsive web layouts. It includes 174 explicitly configured click-navigation reactions, two starting points, four local noise-status components, reused Simple Design System primary/neutral button components, 16 semantic color/spacing/radius variables, and shared Inter text styles. The file uses editable text, frames and component instances; the UI is not a flattened image.

| Required screen | Desktop frame | Mobile web frame |
|---|---|---|
| Landing Page | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1377) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2414) |
| Campus Floor Map | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1435) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2468) |
| Study Zone Details | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1575) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2617) |
| Submit Noise and Outlet Report | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1635) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2677) |
| Report Verification Status | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1702) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2744) |
| Proposed Social GPA Rewards | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1755) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2797) |
| Campus Analytics Dashboard | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1805) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2847) |
| Report Expired / Unknown State | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-1870) | [Open](https://www.figma.com/design/spEnordZysj72nrb1p28kb?node-id=2-2912) |

Supporting states cover Quiet + Available filtering, the second-floor schematic and empty-filter explanation, blocked verification, optional sampling consent/manual fallback, and the submitted Z01 example. Ten illustrative zones appear across two floors. The layout is explicitly schematic, not an approved campus plan.

## Open and demonstrate

1. Open the file, select the page **SilentBeacon Web Prototype**.
2. Select **Desktop web / 01 Landing Page** and use Figma's Present control. Choose **Desktop web · 1280px** if a flow selector appears.
3. For narrow web layouts, choose **Responsive web · 360px** or select **Mobile web / 01 Landing Page** and Present.
4. Follow Landing → Campus map → Quiet + available outlet → Z01 details → report → simulated accepted receipt → updated Z01 example.
5. Show the expiry example: noise at 44:59 remains fresh; at 45:00 it becomes Unknown. The outlet observation has its own timestamp and remains fresh in this scenario.
6. Show the blocked submission/manual fallback, proposed rewards disclaimer and demonstration analytics.
7. Record actual reviewer feedback, device/browser details and any Present-mode defects. Keep this record separate from the agent's structural/visual inspection.

## What the prototype does not establish

These are linked static scenario snapshots. Report categories and comments are preset; controls do not save live observations or change a backend. Global navigation returns to the initial demonstration scenario. **Restart demo · fresh zones** intentionally resets the expiry scenario. The updated-report screen labels its expiry link as a separate scenario because the expiry example uses earlier observation times.

Only Z01 has the full scripted detail/report journey. Other zone buttons explicitly open the Z01 reporting or expiry demonstration; they do not pretend to load those zones' individual records. This does not meet the original implementation acceptance criterion that every pilot zone can be opened and reported against.

There is no server validation, network eligibility, abuse prevention, database, authoritative clock, automatic 45-minute timer, microphone capture, audio upload, physical IoT sensing or real Social GPA credit. Social GPA is simulated and subject to university approval. Analytics counts are synthetic demonstration data. Optional sampling shows consent/fallback concepts only; calibration, permission and privacy tests have not occurred.

## Verification and evidence

- Completed: actual file creation; native component/frame generation; 174 navigation reactions written successfully; two flow starting points.
- Completed: structural read-back across 26 frames after composition showed Inter text, no image-filled nodes and no horizontal-overflow findings. See `structural-audit.json`.
- Completed: all 26 frame compositions were visually inspected through Figma screenshots. The floor-2 heading, demo context labels and expiry-reset wording were corrected in place; changed views were inspected after their fixes.
- Blocked: an additional final structural re-audit hit the Figma Starter MCP tool-call limit after the successful edits and visual checks. No retry or upgrade was performed.
- Planned: human Present-mode clickthrough, keyboard/accessibility checks, responsive review on actual devices, second-person review and acceptance decisions. None is claimed as passed.
- Browser walkthrough unavailable: Windows Computer Use stopped because it could not determine the active browser URL confidently. No browser interaction test was performed.
- Screenshots were returned natively by Figma and inspected in the tool session. A local PNG download failed because the host could not resolve the screenshot hostname; no saved PNG is claimed.

`figma-final-state.json` records actual frame IDs, write results and verification limits. `figma-state.json` preserves the initial build record. `build-figma.js` is construction source for the Figma Plugin API context, not a production app or a standalone installed plugin. Before rerunning, inspect the existing file and preserve its matching frames. Do not treat running it again as team review, acceptance or proof of platform runtime behavior.

No source-plan story has been marked Done by this design work. Changes in scope and dates are documented in the project change log.
