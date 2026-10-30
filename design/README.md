# SilentBeacon Web Prototype

> **Generator status:** `build-figma.js` includes the observed 30-minute expiry, corrected map/filter and Z01 example-report routes, and interactive Pending → Approved → Rejected → Pending reward examples at both widths. It is a fresh-build script, not an updater: it stops before making changes if the current page is not empty. Its output has been checked locally against a mock Figma API, but has not been rebuilt or compared in Figma because the Starter MCP tool-call limit prevents a structural export. The existing Figma file remains the source of truth; full node-by-node or visual identity has not been verified. The 26-frame and 174-reaction figures below describe an earlier snapshot, not a verified count of the current file.

[Open the editable Figma file](https://www.figma.com/design/spEnordZysj72nrb1p28kb). Created on 29 October 2026 in the authenticated user's default drafts. No invitations or sharing changes were made. The connector does not expose an independently verified private access-control list.

## Report alignment

On October 30, following the user's decision to use the endterm report's 30-minute expiry, the existing Figma text and timestamps were updated via the editor in both desktop and 360px web layouts. Page-wide search for 45 returned only the valid 14:45 outlet expiry time. The desktop and narrow expiry frames were inspected after reload. This verifies the revised examples, not a full Present-mode or keyboard walkthrough. The report also changes US09–US11 to simulated rewards and aggregated analytics; assess those design states against the current criteria.

## What exists

At the initial build, the Figma file contained 26 native editable frames: eight required screens and five supporting scenario states, each in 1280px desktop and 360px responsive web layouts. The initial build recorded 174 explicitly configured click-navigation reactions, two starting points, four local noise-status components, reused Simple Design System primary/neutral button components, 16 semantic color/spacing/radius variables, and shared Inter text styles. Further states were added in the editor on October 30; the initial counts have not been re-audited. The file uses editable text, frames and component instances; the UI is not a flattened image.

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
5. Show the expiry example: noise at 29:59 remains fresh; at 30:00 it becomes Unknown. The outlet observation has its own timestamp and remains fresh in this scenario. These are static demonstration states; verify the complete flow in Present mode before defense.
6. Show the blocked submission/manual fallback, proposed rewards disclaimer and demonstration analytics.
7. Record actual reviewer feedback, device/browser details and any Present-mode defects. Keep this record separate from the agent's structural/visual inspection.

## What the prototype does not establish

These are linked static scenario snapshots. Report categories and comments are preset; controls do not save live observations or change a backend. Global navigation returns to the initial demonstration scenario. **Restart demo · fresh zones** intentionally resets the expiry scenario. The updated-report screen labels its expiry link as a separate scenario because the expiry example uses earlier observation times.

Only Z01 has the full scripted detail/report journey. Other zone buttons explicitly open the Z01 reporting or expiry demonstration; they do not pretend to load those zones' individual records. This does not meet the original implementation acceptance criterion that every pilot zone can be opened and reported against.

There is no server validation, network eligibility, abuse prevention, database, authoritative clock, automatic expiry timer, microphone capture, audio upload, physical IoT sensing or real Social GPA credit. Social GPA is simulated and subject to university approval. Analytics counts are synthetic demonstration data. Optional sampling shows consent/fallback concepts only; calibration, permission and privacy tests have not occurred.

## Verification and evidence

- Completed: actual file creation; native component/frame generation; 174 navigation reactions written successfully; two flow starting points.
- Completed: structural read-back across 26 frames after composition showed Inter text, no image-filled nodes and no horizontal-overflow findings. See `structural-audit.json`.
- Completed: all 26 frame compositions were visually inspected through Figma screenshots. The floor-2 heading, demo context labels and expiry-reset wording were corrected in place; changed views were inspected after their fixes.
- Blocked: an additional final structural re-audit hit the Figma Starter MCP tool-call limit after the successful edits and visual checks. No retry or upgrade was performed.
- Planned: team Present-mode clickthrough, keyboard/accessibility checks, responsive review on actual devices, second-person review and acceptance decisions. None is claimed as passed.
- October 30: the expiry text and timestamp examples were updated in the Figma browser editor. Desktop and 360px expiry frames were viewed after reload, and page-wide search for 45 showed only the valid 14:45 outlet expiry time. This was an editor inspection, not a Present-mode interaction test.
- Historical build screenshots were returned by Figma and inspected in the tool session; their attempted download failed. A desktop editor screenshot of the updated expiry frame was saved separately on the local machine on October 30.

`figma-final-state.json` records historical frame IDs, write results and verification limits. `figma-state.json` preserves the initial build record. `build-figma.js` is construction source for the Figma Plugin API context, not a production app or a standalone installed plugin. To verify its modeled behavior locally, run `node --test design/build-figma.test.cjs` from the repository root. A real fresh build requires an explicitly selected empty page; it creates a separate set of screens and does not update or replace the existing prototype. The guard prevents running it on a nonempty page. A Figma rebuild needs a separate visual and Present-mode review; a mock test is not team review, acceptance or proof of Figma runtime behavior.

No source-plan story has been marked Done by this design work. Changes in scope and dates are documented in the project change log.

## Present-mode check, 30 October 2026

The assistant checked global navigation, Home, zone buttons and main and alternate scenarios in both flows. A Floor 2 filter defect and a misleading report location were reproduced; see the [test record](../evidence/figma-present-check-2026-10-30.md), [filter defect](https://trello.com/c/8eR58iU7) and [report-location defect](https://trello.com/c/tErCntp2). A fresh reaction-by-reaction structural export and a keyboard accessibility audit remain uncompleted; do not claim the entire prototype passed.

The subsequent [fix retest](../evidence/figma-fix-retest-2026-10-30.md) and [interactive rewards retest](../evidence/figma-rewards-retest-2026-10-30.md) record the fixes and the controls actually exercised after those historical findings.
