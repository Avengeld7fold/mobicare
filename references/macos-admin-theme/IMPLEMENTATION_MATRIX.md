# macOS 26 Admin — Reference Matrix

Approved: browser-filling application window; monochrome symbols; existing admin functions only.

| Surface | Screenshot IDs | Local guide | Official HIG |
|---|---|---|---|
| Shell/sidebar/toolbar | 06,12,13,54,65,69 | WINDOWS_SYSTEM, SIDEBARS_SYSTEM, TOOLBARS_SYSTEM | windows, sidebars, toolbars |
| Typography | 02 | TYPOGRAPHY_SYSTEM | typography |
| Palette/materials | 16,17 | COLOR_SYSTEM | color, materials |
| Buttons/disclosure | 19–22,27–28 | BUTTONS_SYSTEM, DISCLOSURE_CONTROLS_SYSTEM | buttons, disclosure-controls |
| Editor/forms/search | 29,45,48,58,60–64 | FORMS_SYSTEM, TEXT_FIELDS_SYSTEM, SEARCH_FIELDS_SYSTEM, TOGGLES_SYSTEM | text-fields, search-fields, toggles |
| Price tables/selection | 07,31 | LISTS_AND_TABLES_SYSTEM | lists-and-tables |
| Media upload | 30 | IMAGE_WELLS_SYSTEM | image-wells |
| Export/icon sheet | 05,26,43,53 | SHEETS_SYSTEM, SAVE_DIALOGS_SYSTEM, POPOVERS_SYSTEM | sheets, popovers |
| Confirmation | 03,04,18 | ALERTS_SYSTEM | alerts |
| Feedback/scroll | 39,44,51–52 | NOTIFICATIONS_SYSTEM, PROGRESS_INDICATORS_SYSTEM, SCROLLBARS_SYSTEM | progress-indicators, scroll-views |

Official base: https://developer.apple.com/design/human-interface-guidelines/

## Source reconciliation
- Apple materials guidance places Liquid Glass in controls/navigation, not content panels; content remains solid.
- The web uses native system fonts, not downloaded SF files. 13px desktop body is the web adaptation of the 13pt macOS reference, not a universal unit equivalence.
- Desktop controls use compact reference geometry; coarse pointers and mobile use 44px hit targets and 16px inputs.
- Traffic lights are decorative, nonfocusable dots. No browser-window close/minimize simulation.
- Local examples mentioning invoices, inventory, cashier, warranty queues, or fabricated status are not features in scope.
- AppKit material rendering cannot be exactly reproduced by CSS; compare hierarchy, geometry and contrast at equal CSS scale.

