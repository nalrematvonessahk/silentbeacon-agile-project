# Figma Present-mode check — 30 October 2026

Scope: manual click-through by the assistant in Figma Present, using the desktop 1280px flow and responsive 360px design flow. The browser viewport was temporarily set to 1440 × 900; this is not a test on a physical phone or an accessibility audit. The prototype is a set of linked demo states, not a live service.

## Verified transitions

- Both layouts: Landing → Map → Quiet + available outlet → Z01 details → Update this zone → Report → Submit example report → Verification → View updated example zone → Open separate expiry scenario. The 30:00 Unknown state and the separate 27:00 outlet observation were visible. The 29:59/30:00 boundary is explanatory text, not a running timer test.
- Both layouts: Report → Preview blocked submission → Return to manual report; Report → optional estimate → manual fallback; header navigation to Rewards, Campus insights, and Map.
- Desktop: blocked submission → Browse map; optional estimate → Confirm and → Deny; expiry → Restart demo / fresh zones; map Z02/Z03 → labeled Z01 report demonstration, Z04 → labeled Z01 expiry demonstration; map → Home.
- Responsive flow: Landing → Rewards → Contribute example report; optional estimate → Confirm; Analytics → Explore example zones → Map; Z02/Z03 → labeled Z01 report demonstration; Report → Home; Floor 2 → Clear filters / Floor 1.

These represent the controls actually clicked and observed, not an exhaustive audit of the 174 reactions reported at creation. Exact selected URLs and visual states were checked during the session. The 360px frame was viewed in a desktop browser viewport; device-specific behavior remains unverified. A full keyboard-accessibility test has not been completed.

## Open defect: filter changes floors

In both layouts, choose Floor 2, then click Quiet + available outlet. Expected: remain on Floor 2 and show no matching zones. Actual: the prototype navigates to the filtered Floor 1 state showing Z01. The Floor 2 screen already includes an explanatory no-matches panel, but clicking the filter switches floors. This is unresolved. Trello: https://trello.com/c/8eR58iU7

## Product limitations

Only Z01 has its own complete detail/report flow. Other zone buttons explicitly open Z01 examples. Category selections, reporting, verification and expiry are preset Figma scenarios; they do not persist data, perform network verification or run a server timer. The rewards view does not yet demonstrate all pending/approved/rejected and duplicate/unverified examples in the report's US09/US11. The checks do not prove completion of original implementation acceptance criteria or team approval.

## Additional verified action

- Desktop and responsive: zone buttons Z01–Z10 were individually clicked; Z02–Z10 open the explicitly labeled Z01 report or expiry example. Global navigation links and Home were also checked individually across the non-self desktop and responsive frames. On desktop the additional floor controls, Clear filters, report buttons, and Updated → Update this zone were checked. The subsequently tested responsive scenario actions are listed below; do not claim all 174 reactions passed without a reaction-by-reaction reconciliation.

## Additional open issue: report location

On the responsive flow, Floor 2 → Submit a community report opened the fixed Floor 1 / Z01 demo report without warning before navigation. The destination itself displays its location. The same Floor 2 report button and its fixed Floor 1 / Z01 destination were also observed in desktop Present; no prior warning appeared on the button. Trello: https://trello.com/c/tErCntp2

## Completion of remaining checks

The assistant subsequently checked responsive Floor 2 → Floor 1, Filtered → Floor 1 and Floor 2, and Submit a community report from Floor 1, Filtered and Floor 2. Responsive Details → 30-minute expiry, Receipt → Rewards, Blocked → Browse map, and Expired → Restart fresh zones opened the expected frames. Desktop Floor 2 → Clear filters / Floor 1, report buttons on all three map states and Updated → Update this zone were also checked. All non-self global header links and Home from the other 12 frames were exercised for each layout; all Z01–Z10 buttons were exercised. The Floor 2 filter defect and the misleading fixed report location remain open.

Coverage describes the controls and scenarios actually exercised; the historical count of 174 configured reactions has not been independently reconciled against a fresh reaction-by-reaction Figma export. The Figma MCP Starter call limit prevented that independent structural export. These checks do not establish a live implementation, team acceptance or keyboard accessibility.
