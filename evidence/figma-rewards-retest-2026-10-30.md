# Interactive reward examples — Present verification, 30 October 2026

Figma file: https://www.figma.com/design/spEnordZysj72nrb1p28kb

The existing Rewards screen now starts with Pending. Separate editable Approved and Rejected screens were added for both the 1280 px and 360 px web designs. The assistant clicked and observed the entire cycle **Pending → Approved → Rejected → Pending** in Figma Present on each layout. These are preset demonstration examples, not actual report verification or Social GPA credits; the screens say that rewards are simulated and subject to university approval.

The 360 px design was tested in a desktop browser, not on a physical device. The Figma MCP Starter tool-call limit prevented a structural export of all configured interactions, so the checks below describe the controls actually clicked, not a verified count of all prototype reactions. This record does not claim keyboard accessibility or team acceptance.

## Additional checks observed in this session

- Desktop: Landing → Map → Z01 details → Report → Submit example → Verification → updated zone; report → optional sampling → Confirm and Deny → report; report → blocked → Return or Browse map; Analytics → Explore → Map.
- Desktop and 360 px: Z01–Z10 were individually clicked. Z01 opens its own details; Z02, Z03 and Z05 open a labelled Z01 report example; Z04 and Z06–Z10 open a labelled Z01 expiry example. Expiry → Add a fresh example report and → Restart demo were also checked.
- Desktop: filtered Floor 1 → filtered empty Floor 2 → Clear filters → unfiltered Floor 2.
- Desktop and 360 px: Approved and Rejected screens' Campus map, Campus insights, Contribute example report and Home links were checked. The Rewards header button is the current-section control and has no reaction in the Approved screen.
- 360 px: Report → optional sampling → Confirm or Deny → Report; Report → blocked → Return or Browse map. Verification → proposed Rewards; Analytics → Explore → Floor 1. Landing → Explore map. Home was checked from Floor 1, report, Pending, analytics, Approved and Rejected.
- Both layouts: the explicitly labelled Open Z01 example report button on the unfiltered Floor 1, filtered Floor 1, unfiltered Floor 2 and filtered empty Floor 2 screens opens the example report.
- The previously misleading Floor 2 caption on the Floor 1 maps was replaced in six map screens with a neutral notice that the campus zones and observations are examples, not live data. The replacement was observed in the 360 px filtered Floor 1 and Floor 2 screens.
- Repeated header and Home checks: Desktop Details, Report, Verification, Expired, Blocked, Sampling, Updated, the map states, and all three Rewards states were checked; Landing and Analytics navigation was also exercised. At 360 px, Details, Report, Verification, Expired, Blocked, Sampling, Updated, the map states and all three Rewards states were checked; Landing and Analytics navigation was also exercised. Current-section buttons may intentionally have no navigation reaction.
- Both layouts: Updated → Update this zone → Report and Updated → separate expiry example were clicked. Desktop Details → 30-minute expiry example and 360 px Details → Update this zone → Report were also clicked.

Earlier results and initially reported bugs remain in the historical Present-check and fix-retest records. At the time of this check the local generator did not represent the manual edits. It was subsequently updated to encode the observed scenarios and guarded against running on a nonempty page; see `design/README.md` for verification limits and safe use.

