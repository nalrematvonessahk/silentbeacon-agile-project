# Figma fixes and focused Present retest — 30 October 2026

Scope: manual checks by the assistant in Figma Present after editing the existing prototype. These checks cover the desktop frame and the responsive 360 px frame displayed in a desktop browser. They are not a physical-device, keyboard-accessibility, or reaction-by-reaction audit. The earlier Present check remains a historical record of the defects as originally observed.

## Focused checks

- **Floor 2 filter:** On both layouts, Floor 2 → Quiet + available outlet opens a separate empty-result frame, retains Floor 2, and displays no zone cards. The desktop frame is `25:616`; the 360 px frame is `25:887`.
- **Clear filter:** On both layouts, Clear filters · Floor 2 returns to the unfiltered Floor 2 map.
- **Switch floors with the filter active:** On both layouts, the filtered empty Floor 2 → Floor 1 opens the filtered Floor 1 state; the reverse transition opens the filtered empty Floor 2 state.
- **Example report:** On both layouts, the button is labeled Open Z01 example report before navigation and opens the preset Floor 1 / Z01 example report. This is a demonstration, not a Floor 2 report submission.
- **Rewards:** The desktop and 360 px Rewards screens display Pending, Approved, and Rejected as static demonstration examples, with a statement that the proposed rewards are simulated and subject to university approval. The screen states that no real credit is awarded. These examples are not separate interactive reward states.

These checks do not establish that every prototype connection was retested, that live reporting or rewards exist, or that the team accepted the changes. Original issue cards: [Floor 2 filter](https://trello.com/c/8eR58iU7) and [example report location](https://trello.com/c/tErCntp2).

## Maintenance note

The local `design/build-figma.js` predates the direct edits in the Figma editor and does not represent the current Figma screens or interactions. Rerunning it may overwrite the fixes; reconcile the generator first.
