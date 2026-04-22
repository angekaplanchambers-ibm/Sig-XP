# Settings Policies

## Screenshot
![Settings Policies](/reference-images/Settings-Policies.png)

## Source
- File: Reference-Images/Settings-Policies.png
- Product area: Integrations and Governance

## Hashi-designer Lens
- JTBD: Capture what the operator needs to configure in this area to keep Terraform delivery reliable and governed.
- CUJ: Open this page, inspect the current configuration, make a targeted update, and confirm expected state.
- OOUX objects in view: Organization, Project, Workspace, Policy, Run, Team, Identity Provider, or Registry asset (varies by page).

## Helios Design System Mapping
- App shell: AppFrame with Header, Sidebar, and Main content regions.
- Primary structure: Card, Table, Tabs, and Breadcrumb patterns for hierarchy and navigation.
- Controls: Button, Dropdown, Toggle, Text Input, and Select patterns for configuration actions.
- Feedback: Alert, Badge, and Application State patterns for status and exceptions.

## Content Blocks To Recreate In Storybook
- Page header with title and contextual actions.
- Main information region (table, list, or form) that supports scan-first behavior.
- Secondary metadata or status chips to convey health, ownership, and state.
- Empty, loading, and error states for the primary content region.

## Accessibility Checklist
- Ensure keyboard traversal order follows the visual layout.
- Preserve visible focus rings and sufficient contrast for status indicators.
- Provide explicit labels and helper text for every form control.
- Use semantic table and heading structure for screen reader navigation.
