import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '@hashicorp/design-system-tokens/dist/products/css/tokens.css';
import { IconChevronDown16 } from '@hashicorp/flight-icons/svg-react/chevron-down-16';
import { IconDocs16 } from '@hashicorp/flight-icons/svg-react/docs-16';
import { IconLayers16 } from '@hashicorp/flight-icons/svg-react/layers-16';
import { IconBarChart16 } from '@hashicorp/flight-icons/svg-react/bar-chart-16';
import { IconHelp16 } from '@hashicorp/flight-icons/svg-react/help-16';
import { IconMoreHorizontal16 } from '@hashicorp/flight-icons/svg-react/more-horizontal-16';
import { IconOrg16 } from '@hashicorp/flight-icons/svg-react/org-16';
import { IconSearch16 } from '@hashicorp/flight-icons/svg-react/search-16';
import { IconSettings16 } from '@hashicorp/flight-icons/svg-react/settings-16';
import { IconWorkspace16 } from '@hashicorp/flight-icons/svg-react/workspace-16';

type TemplateKind =
  | 'overview-list'
  | 'registry-library'
  | 'settings-form'
  | 'settings-table'
  | 'settings-activity'
  | 'settings-security';

type PageId =
  | 'Organizations'
  | 'Projects'
  | 'Workspaces'
  | 'Stacks'
  | 'Usage'
  | 'Registry-Private-Library'
  | 'Registry-Public-Namespaces'
  | 'Settings-General'
  | 'Settings-Plan&Billing'
  | 'Settings-Tag-Management'
  | 'Settings-Teams'
  | 'Settings-Users'
  | 'Settings-Variable-sets'
  | 'Settings-Health'
  | 'Settings-Runs'
  | 'Settings-Cost-Estimation'
  | 'Settings-Policies'
  | 'Settings-Policy-sets'
  | 'Settings-Run-tasks'
  | 'Settings-API-tokens'
  | 'Settings-Agents'
  | 'Settings-Auditing'
  | 'Settings-Authentication'
  | 'Settings-IP-allowlists'
  | 'Settings-SSH-Keys'
  | 'Settings-SSO'
  | 'Settings-Version-control-VCS-General'
  | 'Settings-Version-Control-VCS-Events'
  | 'Settings-Version-Control-VCS-Providers';

const allPages: PageId[] = [
  'Organizations',
  'Projects',
  'Workspaces',
  'Stacks',
  'Usage',
  'Registry-Private-Library',
  'Registry-Public-Namespaces',
  'Settings-General',
  'Settings-Plan&Billing',
  'Settings-Tag-Management',
  'Settings-Teams',
  'Settings-Users',
  'Settings-Variable-sets',
  'Settings-Health',
  'Settings-Runs',
  'Settings-Cost-Estimation',
  'Settings-Policies',
  'Settings-Policy-sets',
  'Settings-Run-tasks',
  'Settings-API-tokens',
  'Settings-Agents',
  'Settings-Auditing',
  'Settings-Authentication',
  'Settings-IP-allowlists',
  'Settings-SSH-Keys',
  'Settings-SSO',
  'Settings-Version-control-VCS-General',
  'Settings-Version-Control-VCS-Events',
  'Settings-Version-Control-VCS-Providers',
];

const shell: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '248px 1fr',
  height: '100%',
  background: '#fff',
};

const leftRail: CSSProperties = {
  borderRight: '1px solid #c6c6c6',
  padding: 16,
  background: '#f8f8f8',
};

const navGroup: CSSProperties = {
  marginBottom: 14,
};

const navLabel: CSSProperties = {
  height: 8,
  width: '45%',
  background: '#d8d8d8',
  marginBottom: 8,
};

const navItem: CSSProperties = {
  height: 10,
  width: '90%',
  background: '#ececec',
  marginBottom: 6,
};

const main: CSSProperties = {
  display: 'grid',
  gridTemplateRows: '56px 1fr',
  minWidth: 0,
};

const topBar: CSSProperties = {
  borderBottom: '1px solid #c6c6c6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 18px',
};

const pageTitle: CSSProperties = {
  width: 320,
  height: 14,
  background: '#d8d8d8',
};

const actionChip: CSSProperties = {
  width: 110,
  height: 26,
  background: '#ececec',
  border: '1px solid #d0d0d0',
};

const content: CSSProperties = {
  padding: 18,
  display: 'grid',
  gap: 14,
  alignContent: 'start',
  overflow: 'auto',
};

const card: CSSProperties = {
  border: '1px solid #d0d0d0',
  background: '#fcfcfc',
  padding: 12,
};

const row = (w: string, h = 10): CSSProperties => ({
  width: w,
  height: h,
  background: '#e4e4e4',
  marginBottom: 8,
});

const heliosTheme = {
  border: 'var(--token-color-border-primary)',
  borderStrong: 'var(--token-color-border-strong)',
  bgPrimary: 'var(--token-color-palette-neutral-0)',
  bgFaint: 'var(--token-color-palette-neutral-50)',
  bgSubtle: 'var(--token-color-palette-neutral-100)',
  bgDark: 'var(--token-color-palette-neutral-700)',
  bgDarkMid: 'var(--token-color-palette-neutral-600)',
  textStrong: 'var(--token-color-foreground-strong)',
  textPrimary: 'var(--token-color-foreground-primary)',
  textFaint: 'var(--token-color-foreground-faint)',
  textHighContrast: 'var(--token-color-foreground-high-contrast)',
  action: 'var(--token-color-foreground-action)',
  actionSurface: 'var(--token-color-palette-blue-200)',
  radiusM: 'var(--token-border-radius-medium)',
  radiusL: 'var(--token-border-radius-large)',
};

const organizationNames = ['Ash-Environment', 'ILM_Demo_Space'];
const defaultOrganization = 'ILM_Demo_Space';
const organizationDropdownItems = ['Choose an Organization', ...organizationNames];

type LeftNavPage = 'Organizations' | 'Projects' | 'Workspaces' | 'Stacks' | 'Usage' | 'Settings-General';

const leftNavStoryId: Record<LeftNavPage, string> = {
  Organizations: '?path=/story/reference-images-wireframes--organizations',
  Projects: '?path=/story/reference-images-wireframes--projects',
  Workspaces: '?path=/story/reference-images-wireframes--workspaces',
  Stacks: '?path=/story/reference-images-wireframes--stacks',
  Usage: '?path=/story/reference-images-wireframes--usage',
  'Settings-General': '?path=/story/reference-images-wireframes--settings-general',
};

function getSelectedOrganizationFromUrl(): string {
  if (typeof window === 'undefined') {
    return defaultOrganization;
  }

  const selected = new URLSearchParams(window.location.search).get('org');
  if (selected && organizationNames.includes(selected)) {
    return selected;
  }

  return defaultOrganization;
}

function buildStoryHref(page: LeftNavPage, org = getSelectedOrganizationFromUrl()): string {
  const safeOrg = organizationNames.includes(org) ? org : defaultOrganization;
  return `${leftNavStoryId[page]}&org=${encodeURIComponent(safeOrg)}`;
}

function buildCurrentStoryHref(org = getSelectedOrganizationFromUrl()): string {
  const safeOrg = organizationNames.includes(org) ? org : defaultOrganization;
  if (typeof window === 'undefined') {
    return `${leftNavStoryId.Organizations}&org=${encodeURIComponent(safeOrg)}`;
  }

  const params = new URLSearchParams(window.location.search);
  const currentPath = params.get('path') ?? '/story/reference-images-wireframes--organizations';
  const onOrganizationsPage = currentPath === '/story/reference-images-wireframes--organizations';
  const isChooseOption = org === 'Choose an Organization';
  const targetPath = isChooseOption
    ? '/story/reference-images-wireframes--organizations'
    : onOrganizationsPage && organizationNames.includes(org)
    ? '/story/reference-images-wireframes--workspaces'
    : '/story/reference-images-wireframes--organizations';

  return `?path=${targetPath}&org=${encodeURIComponent(safeOrg)}`;
}

function persistSelectedOrganization(org: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.set('org', org);
  const nextSearch = params.toString();
  window.history.replaceState(null, '', `${window.location.pathname}?${nextSearch}`);
}

function TopProductHeader() {
  const [isOrgMenuOpen, setIsOrgMenuOpen] = useState(false);
  const selectedOrg = getSelectedOrganizationFromUrl();

  return (
    <header style={{ background: heliosTheme.bgDark, borderBottom: `1px solid ${heliosTheme.bgDarkMid}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', height: 54 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, border: `1px solid ${heliosTheme.bgDarkMid}`, background: '#1b2028', display: 'grid', placeItems: 'center', color: heliosTheme.textHighContrast }}>
          <IconOrg16 />
        </div>
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setIsOrgMenuOpen((open) => !open)}
            style={{ width: 220, height: 30, borderRadius: heliosTheme.radiusM, border: `1px solid ${heliosTheme.bgDarkMid}`, background: '#12161d', color: heliosTheme.textHighContrast, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', fontSize: 13, cursor: 'pointer' }}
          >
            <span>{selectedOrg}</span>
            <IconChevronDown16 color={heliosTheme.textHighContrast} />
          </button>
          {isOrgMenuOpen ? (
            <div style={{ position: 'absolute', top: 34, left: 0, width: 220, borderRadius: heliosTheme.radiusM, border: `1px solid ${heliosTheme.bgDarkMid}`, background: '#12161d', overflow: 'hidden', zIndex: 20 }}>
              {organizationDropdownItems.map((org) => (
                <a
                  key={org}
                  href={buildCurrentStoryHref(org)}
                  onClick={() => {
                    setIsOrgMenuOpen(false);
                    persistSelectedOrganization(org === 'Choose an Organization' ? defaultOrganization : org);
                  }}
                  style={{ width: '100%', height: 32, border: 'none', borderTop: org === organizationDropdownItems[0] ? 'none' : `1px solid ${heliosTheme.bgDarkMid}`, background: org === selectedOrg ? '#1f2530' : '#12161d', color: heliosTheme.textHighContrast, textAlign: 'left', padding: '0 10px', fontSize: 13, cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                >
                  {org}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 32, borderRadius: 6, border: `1px solid ${heliosTheme.bgDarkMid}`, background: '#12161d', color: heliosTheme.textHighContrast, display: 'grid', placeItems: 'center' }}>
          <IconHelp16 color={heliosTheme.textHighContrast} />
        </div>
        <div style={{ width: 28, height: 28, borderRadius: 4, background: '#d9d9d9', border: `1px solid ${heliosTheme.borderStrong}` }} />
      </div>
    </header>
  );
}

function GlobalFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${heliosTheme.border}`, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 26, background: heliosTheme.bgPrimary, height: 38 }}>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>Support</span>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>Terms</span>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>Privacy</span>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>Security</span>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>Accessibility</span>
      <span style={{ fontSize: 11, color: heliosTheme.textFaint }}>© 2026 HashiCorp, an IBM Company</span>
    </footer>
  );
}

function ManageSidebar({ active }: { active: 'Projects' | 'Stacks' | 'Workspaces' | 'Usage' | 'Settings' }) {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const navItemStyle = (isActive: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    height: 33,
    padding: '0 14px',
    borderRadius: heliosTheme.radiusM,
    color: isActive ? heliosTheme.action : heliosTheme.textStrong,
    background: isActive ? heliosTheme.bgSubtle : 'transparent',
    fontWeight: isActive ? 600 : 500,
    fontSize: 13,
  });

  return (
    <aside style={{ borderRight: `1px solid ${heliosTheme.border}`, background: heliosTheme.bgFaint, padding: '16px 16px 16px 0' }}>
      <div style={{ color: heliosTheme.textFaint, fontWeight: 700, marginBottom: 8, fontSize: 13, lineHeight: 1, paddingLeft: 14 }}>Manage</div>
      <a href={buildStoryHref('Projects', selectedOrg)} style={{ ...navItemStyle(active === 'Projects'), textDecoration: 'none' }}><IconDocs16 color={active === 'Projects' ? heliosTheme.action : heliosTheme.textPrimary} />Projects</a>
      <a href={buildStoryHref('Stacks', selectedOrg)} style={{ ...navItemStyle(active === 'Stacks'), textDecoration: 'none' }}><IconLayers16 color={active === 'Stacks' ? heliosTheme.action : heliosTheme.textPrimary} />Stacks</a>
      <a href={buildStoryHref('Workspaces', selectedOrg)} style={{ ...navItemStyle(active === 'Workspaces'), textDecoration: 'none' }}><IconWorkspace16 color={active === 'Workspaces' ? heliosTheme.action : heliosTheme.textPrimary} />Workspaces <span style={{ marginLeft: 4, border: `1px solid ${heliosTheme.borderStrong}`, padding: '2px 6px', borderRadius: 8, fontSize: 12, color: heliosTheme.textPrimary }}>Beta</span></a>
      <div style={{ ...navItemStyle(false), justifyContent: 'space-between' }}><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconDocs16 color={heliosTheme.textPrimary} />Registry</span><span style={{ color: heliosTheme.textPrimary }}>{'>'}</span></div>
      <a href={buildStoryHref('Usage', selectedOrg)} style={{ ...navItemStyle(active === 'Usage'), textDecoration: 'none' }}><IconBarChart16 color={active === 'Usage' ? heliosTheme.action : heliosTheme.textPrimary} />Usage</a>
      <a href={buildStoryHref('Settings-General', selectedOrg)} style={{ ...navItemStyle(active === 'Settings'), textDecoration: 'none', justifyContent: 'space-between' }}><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><IconSettings16 color={active === 'Settings' ? heliosTheme.action : heliosTheme.textPrimary} />Settings</span><span style={{ color: active === 'Settings' ? heliosTheme.action : heliosTheme.textPrimary }}>{'>'}</span></a>
    </aside>
  );
}

function ProjectsScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const card = { border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, background: heliosTheme.bgPrimary };
  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: heliosTheme.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <ManageSidebar active="Projects" />
        <main style={{ padding: '18px 28px', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 14 }}>
            <div>
              <div style={{ color: heliosTheme.textFaint, fontSize: 13, marginBottom: 6 }}><a href={buildStoryHref('Organizations', selectedOrg)} style={{ color: 'inherit', textDecoration: 'none' }}>{selectedOrg}</a> / Projects</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: heliosTheme.bgSubtle, display: 'grid', placeItems: 'center' }}><IconDocs16 color={heliosTheme.textPrimary} /></div>
                <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1, color: heliosTheme.textStrong }}>Projects</h1>
              </div>
              <p style={{ margin: '10px 0 0 56px', color: heliosTheme.textPrimary, fontSize: 13 }}>Projects in the ILM_Demo_Space organization. Create or select a project to get started.</p>
            </div>
            <div style={{ height: 42, padding: '0 18px', borderRadius: heliosTheme.radiusM, background: heliosTheme.actionSurface, color: heliosTheme.textHighContrast, display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 600 }}>+ New project</div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 390, height: 42, border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8, color: heliosTheme.textFaint, fontSize: 13 }}><IconSearch16 color={heliosTheme.textFaint} />Search by project name</div>
            <div style={{ height: 42, padding: '0 16px', border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, display: 'flex', alignItems: 'center', gap: 8, color: heliosTheme.textPrimary, fontSize: 13 }}>Tags <IconChevronDown16 color={heliosTheme.textPrimary} /></div>
          </div>
          <section style={{ ...card, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr .5fr .5fr 120px', background: heliosTheme.bgSubtle, borderBottom: `1px solid ${heliosTheme.border}` }}>
              {['Project name', 'Description', 'Teams', 'Workspaces', 'Actions'].map((h) => <div key={h} style={{ padding: '14px 18px', fontSize: 13, fontWeight: 700, color: heliosTheme.textStrong }}>{h}</div>)}
            </div>
            {[
              ['ai-error-examples', 'Collect various errors to test AI debugging against', '1', '4'],
              ['Default Project', 'No description', '1', '151'],
              ['OtherProject', 'No description', '1', '4'],
            ].map((r, i) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr .5fr .5fr 120px', borderBottom: i === 2 ? 'none' : `1px solid ${heliosTheme.border}` }}>
                <div style={{ padding: '14px 18px', textDecoration: 'underline', color: heliosTheme.textStrong, fontSize: 13 }}>{r[0]}</div>
                <div style={{ padding: '14px 18px', color: heliosTheme.textPrimary, fontSize: 13 }}>{r[1]}</div>
                <div style={{ padding: '14px 18px', textDecoration: 'underline', color: heliosTheme.textStrong, fontSize: 13 }}>{r[2]}</div>
                <div style={{ padding: '14px 18px', textDecoration: 'underline', color: heliosTheme.textStrong, fontSize: 13 }}>{r[3]}</div>
                <div style={{ padding: '10px 18px', display: 'flex', justifyContent: 'end' }}><div style={{ width: 34, height: 34, border: `1px solid ${heliosTheme.border}`, borderRadius: 8, display: 'grid', placeItems: 'center' }}><IconMoreHorizontal16 color={heliosTheme.textFaint} /></div></div>
              </div>
            ))}
          </section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <span style={{ fontSize: 12, color: heliosTheme.textFaint }}>1-3 of 3</span>
            <span style={{ fontSize: 12, color: heliosTheme.action }}>1</span>
            <div style={{ border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, padding: '5px 10px', fontSize: 13, color: heliosTheme.textPrimary }}>Items per page 10</div>
          </div>
        </main>
      </section>
      <GlobalFooter />
    </div>
  );
}

function WorkspacesScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const card = { border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, background: heliosTheme.bgPrimary };
  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: heliosTheme.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <ManageSidebar active="Workspaces" />
        <main style={{ padding: '18px 28px', overflow: 'auto' }}>
          <div style={{ color: heliosTheme.textFaint, fontSize: 13, marginBottom: 8 }}><a href={buildStoryHref('Organizations', selectedOrg)} style={{ color: 'inherit', textDecoration: 'none' }}>{selectedOrg}</a> / Workspaces</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1, color: heliosTheme.textStrong }}>Workspaces</h1>
            <div style={{ height: 42, padding: '0 18px', borderRadius: heliosTheme.radiusM, background: heliosTheme.actionSurface, color: heliosTheme.textHighContrast, display: 'flex', alignItems: 'center', fontSize: 13 }}>New</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ height: 40, padding: '0 14px', border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, display: 'flex', alignItems: 'center', color: heliosTheme.textPrimary, fontSize: 13 }}>All filters</div>
              <div style={{ width: 340, height: 40, border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8, color: heliosTheme.textFaint }}><IconSearch16 color={heliosTheme.textFaint} />Search by workspace name</div>
            </div>
            <div style={{ display: 'flex', gap: 0, border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, overflow: 'hidden' }}>
              {[
                ['2 Need attention', '#fbeabf', '#542800'],
                ['20 Errored', '#fbd4d4', '#51130a'],
                ['0 Running', '#cce3fe', '#1c345f'],
                ['70 Completed', '#cceeda', '#054220'],
              ].map((s, i) => (
                <div key={s[0]} style={{ padding: '10px 14px', borderLeft: i === 0 ? 'none' : `1px solid ${heliosTheme.border}`, fontSize: 14, color: s[2], background: s[1], fontWeight: 600 }}>{s[0]}</div>
              ))}
            </div>
          </div>
          <section style={{ ...card, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr .65fr .55fr .6fr 90px', background: heliosTheme.bgSubtle, borderBottom: `1px solid ${heliosTheme.border}` }}>
              {['Workspace name', 'Repository', 'Health', 'Project', 'Latest change', 'Manage'].map((h) => <div key={h} style={{ padding: '14px 16px', fontWeight: 700, color: heliosTheme.textStrong }}>{h}</div>)}
            </div>
            {[
              ['aws-no-provider-config', 'hashicorp/terraform-error-examples', 'None', 'ai-error-examples', '2 years ago'],
              ['bigmodeworkspace', 'None', 'None', 'trailer', '2 years ago'],
              ['boop', 'None', 'Warning', 'Default Project', '6 months ago'],
            ].map((r, i) => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr .65fr .55fr .6fr 90px', borderBottom: i === 2 ? 'none' : `1px solid ${heliosTheme.border}` }}>
                <div style={{ padding: '14px 16px', color: heliosTheme.textStrong, textDecoration: 'underline' }}>{r[0]}</div>
                <div style={{ padding: '14px 16px', color: heliosTheme.textStrong, textDecoration: 'underline' }}>{r[1]}</div>
                <div style={{ padding: '14px 16px', color: heliosTheme.textPrimary }}>{r[2]}</div>
                <div style={{ padding: '14px 16px', color: heliosTheme.textStrong, textDecoration: 'underline' }}>{r[3]}</div>
                <div style={{ padding: '14px 16px', color: heliosTheme.textPrimary }}>{r[4]}</div>
                <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'end' }}><div style={{ width: 34, height: 34, border: `1px solid ${heliosTheme.border}`, borderRadius: 8, display: 'grid', placeItems: 'center' }}><IconMoreHorizontal16 color={heliosTheme.textFaint} /></div></div>
              </div>
            ))}
          </section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <span style={{ fontSize: 12, color: heliosTheme.textFaint }}>1-3 of 3</span>
            <span style={{ fontSize: 12, color: heliosTheme.action }}>1</span>
            <div style={{ border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, padding: '5px 10px', fontSize: 13, color: heliosTheme.textPrimary }}>Items per page 20</div>
          </div>
        </main>
      </section>
      <GlobalFooter />
    </div>
  );
}

function StacksScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const card = { border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, background: heliosTheme.bgPrimary };
  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: heliosTheme.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <ManageSidebar active="Stacks" />
        <main style={{ padding: '18px 28px', overflow: 'auto' }}>
          <div style={{ color: heliosTheme.textFaint, fontSize: 13, marginBottom: 8 }}><a href={buildStoryHref('Organizations', selectedOrg)} style={{ color: 'inherit', textDecoration: 'none' }}>{selectedOrg}</a> / Stacks</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 46, height: 46, borderRadius: 10, background: heliosTheme.bgSubtle, display: 'grid', placeItems: 'center' }}><IconLayers16 color={heliosTheme.textPrimary} /></div>
            <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1, color: heliosTheme.textStrong }}>Stacks</h1>
          </div>
          <section style={{ ...card, minHeight: 520, display: 'grid', placeItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 170, height: 170, borderRadius: '50%', background: '#f5f0ff', margin: '0 auto 20px', display: 'grid', placeItems: 'center', color: '#7b00db' }}><IconLayers16 color="#7b00db" /></div>
              <h2 style={{ margin: '0 0 10px 0', color: heliosTheme.textStrong, fontSize: 24 }}>Stacks are disabled for your organization</h2>
              <p style={{ margin: '0 0 18px 0', color: heliosTheme.textPrimary, fontSize: 13 }}>You can enable Stacks in the organization settings.</p>
              <div style={{ color: heliosTheme.action, fontSize: 13, fontWeight: 700 }}>Enable stacks →</div>
              <div style={{ marginTop: 10, color: heliosTheme.textFaint, fontSize: 14 }}>Learn more about managing stack workflows</div>
            </div>
          </section>
        </main>
      </section>
      <GlobalFooter />
    </div>
  );
}

function UsageScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const card = { border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, background: heliosTheme.bgPrimary };
  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: heliosTheme.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <ManageSidebar active="Usage" />
        <main style={{ padding: '18px 28px', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
            <div style={{ color: heliosTheme.textFaint, fontSize: 13 }}><a href={buildStoryHref('Organizations', selectedOrg)} style={{ color: 'inherit', textDecoration: 'none' }}>{selectedOrg}</a> / Usage</div>
            <div style={{ border: `1px solid ${heliosTheme.borderStrong}`, borderRadius: heliosTheme.radiusM, padding: '8px 12px', color: heliosTheme.textPrimary, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>Current month <IconChevronDown16 color={heliosTheme.textPrimary} /></div>
          </div>
          <h1 style={{ margin: 0, fontSize: 30, lineHeight: 1, color: heliosTheme.textStrong }}>Usage report</h1>
          <p style={{ margin: '10px 0 20px 0', color: heliosTheme.textPrimary, fontSize: 13 }}>Showing current Standard (entitlement) plan subscription.</p>
          <h2 style={{ margin: '0 0 12px 0', color: '#42215b', fontSize: 24 }}>Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 12, marginBottom: 12 }}>
            {[
              ['Active projects', '12'],
              ['Active workspaces', '172'],
              ['Total applies', '363'],
              ['Applies this month', '3'],
              ['Average applies per month', '18'],
            ].map((k) => <div key={k[0]} style={{ ...card, padding: 14 }}><div style={{ color: heliosTheme.textFaint, fontWeight: 700 }}>{k[0]}</div><div style={{ fontSize: 46, fontWeight: 800, color: heliosTheme.textStrong, marginTop: 8 }}>{k[1]}</div></div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginBottom: 24 }}>
            {[
              ['Billable Managed Resources', '307'],
              ['Concurrent run limit reached', '106'],
              ['Active agents', '0'],
            ].map((k) => <div key={k[0]} style={{ ...card, padding: 14 }}><div style={{ color: heliosTheme.textFaint, fontWeight: 700 }}>{k[0]}</div><div style={{ fontSize: 46, fontWeight: 800, color: heliosTheme.textStrong, marginTop: 8 }}>{k[1]}</div></div>)}
          </div>
          <h2 style={{ margin: '0 0 12px 0', color: '#42215b', fontSize: 24 }}>Subscription details</h2>
          <section style={{ ...card, overflow: 'hidden', marginBottom: 20 }}>
            {[
              ['Plan', 'Standard (entitlement)'],
              ['Run concurrency limit', '10'],
              ['Maximum number of Agents', '10'],
            ].map((r, i) => <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i === 2 ? 'none' : `1px solid ${heliosTheme.border}` }}><div style={{ padding: '12px 16px', color: heliosTheme.textStrong, fontWeight: 700 }}>{r[0]}</div><div style={{ padding: '12px 16px', color: heliosTheme.textPrimary }}>{r[1]}</div></div>)}
          </section>
          <section style={{ ...card, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr .7fr .4fr', background: heliosTheme.bgSubtle, borderBottom: `1px solid ${heliosTheme.border}` }}>
              {['Project name', 'Billable managed resources', 'Workspaces'].map((h) => <div key={h} style={{ padding: '12px 16px', fontWeight: 700, color: heliosTheme.textStrong }}>{h}</div>)}
            </div>
            {[
              ['Default Project', '191', '151'],
              ['OtherProject', '1', '4'],
              ['sim', '2', '2'],
            ].map((r, i) => <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1fr .7fr .4fr', borderBottom: i === 2 ? 'none' : `1px solid ${heliosTheme.border}` }}><div style={{ padding: '12px 16px', color: heliosTheme.textStrong }}>{r[0]}</div><div style={{ padding: '12px 16px', color: heliosTheme.textPrimary }}>{r[1]}</div><div style={{ padding: '12px 16px', color: heliosTheme.textPrimary }}>{r[2]}</div></div>)}
          </section>
        </main>
      </section>
      <GlobalFooter />
    </div>
  );
}

function SettingsGeneralScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const card = { border: `1px solid ${heliosTheme.border}`, borderRadius: heliosTheme.radiusM, background: heliosTheme.bgPrimary };

  const settingsNavItemStyle = (isActive: boolean): CSSProperties => ({
    height: 33,
    display: 'flex',
    alignItems: 'center',
    padding: '0 14px',
    borderRadius: heliosTheme.radiusM,
    color: isActive ? heliosTheme.action : heliosTheme.textStrong,
    background: isActive ? heliosTheme.bgSubtle : 'transparent',
    fontWeight: isActive ? 700 : 500,
    fontSize: 13,
  });

  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: heliosTheme.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <aside style={{ borderRight: `1px solid ${heliosTheme.border}`, background: heliosTheme.bgFaint, padding: '16px 16px 16px 0' }}>
          <a href={buildStoryHref('Workspaces', selectedOrg)} style={{ ...settingsNavItemStyle(false), gap: 8, marginBottom: 8, textDecoration: 'none', fontWeight: 700 }}>‹ Workspaces</a>
          <div style={{ color: heliosTheme.textFaint, fontWeight: 700, marginBottom: 8, fontSize: 13, lineHeight: 1, paddingLeft: 14 }}>Organization Settings</div>
          {['General', 'Plan & Billing', 'Tags', 'Teams', 'Users', 'Variable sets', 'Health', 'Runs', 'API tokens', 'Agents', 'Auditing', 'Authentication', 'IP allowlists', 'SSH keys', 'SSO'].map((item) => (
            <div key={item} style={settingsNavItemStyle(item === 'General')}>{item}</div>
          ))}
        </aside>
        <main style={{ padding: '18px 28px', overflow: 'auto' }}>
          <div style={{ color: heliosTheme.textFaint, fontSize: 13, marginBottom: 8 }}><a href={buildStoryHref('Organizations', selectedOrg)} style={{ color: 'inherit', textDecoration: 'none' }}>{selectedOrg}</a> / Organization Settings: General</div>
          <h1 style={{ margin: '0 0 16px 0', fontSize: 30, lineHeight: 1, color: heliosTheme.textStrong }}>General Settings</h1>
          <div style={{ marginBottom: 10, color: heliosTheme.textStrong, fontWeight: 700 }}>ID</div>
          <div style={{ marginBottom: 16, color: heliosTheme.textPrimary, fontSize: 13 }}>org-YZB6xqWtnsE2hyDi</div>
          <div style={{ marginBottom: 10, color: heliosTheme.textStrong, fontWeight: 700 }}>Name</div>
          <div style={{ ...card, height: 40, marginBottom: 12, display: 'flex', alignItems: 'center', padding: '0 10px', color: heliosTheme.textPrimary, fontSize: 13 }}>ILM_Demo_Space</div>
          <div style={{ marginBottom: 10, color: heliosTheme.textStrong, fontWeight: 700 }}>Notification email</div>
          <div style={{ ...card, height: 40, marginBottom: 20, display: 'flex', alignItems: 'center', padding: '0 10px', color: heliosTheme.textPrimary, fontSize: 13 }}>redinger@hashicorp.com</div>
          {['Workspace administrators can force delete workspaces', 'Tests can be generated for private modules', 'Show Terraform pre-releases'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'start', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 18, height: 18, border: `1px solid ${heliosTheme.actionSurface}`, borderRadius: 4, background: heliosTheme.actionSurface, boxShadow: `inset 0 0 0 2px ${heliosTheme.bgPrimary}` }} />
              <div>
                <div style={{ fontWeight: 700, color: heliosTheme.textStrong, fontSize: 13 }}>{item}</div>
                <div style={{ color: heliosTheme.textPrimary, fontSize: 14, marginTop: 2 }}>Configuration setting enabled for this organization.</div>
              </div>
            </div>
          ))}
          <div style={{ margin: '14px 0 10px 0', fontWeight: 700, color: heliosTheme.textStrong, fontSize: 13 }}>Default Execution Mode</div>
          {['Remote', 'Local', 'Agent'].map((mode, i) => (
            <div key={mode} style={{ display: 'flex', alignItems: 'start', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${i === 0 ? heliosTheme.actionSurface : heliosTheme.borderStrong}`, background: heliosTheme.bgPrimary, display: 'grid', placeItems: 'center' }}>
                {i === 0 ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: heliosTheme.actionSurface }} /> : null}
              </div>
              <div style={{ color: heliosTheme.textStrong, fontSize: 13 }}>{mode}</div>
            </div>
          ))}
          <div style={{ ...card, padding: 16, margin: '10px 0 14px 0', color: heliosTheme.textPrimary }}>Organization execution mode settings apply to workspaces only.</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', height: 44, padding: '0 20px', borderRadius: heliosTheme.radiusM, background: heliosTheme.actionSurface, color: heliosTheme.textHighContrast, fontSize: 13 }}>Update organization</div>
        </main>
      </section>
      <GlobalFooter />
    </div>
  );
}

function formatTitle(id: PageId): string {
  return id.replace(/-/g, ' ');
}

function inferTemplate(page: PageId): TemplateKind {
  if (page.startsWith('Registry-')) return 'registry-library';
  if (page.includes('Version-Control-VCS-Events') || page === 'Settings-Runs' || page === 'Settings-Auditing') return 'settings-activity';
  if (page.includes('Users') || page.includes('Teams') || page.includes('Policies') || page.includes('Policy-sets') || page.includes('Variable-sets')) return 'settings-table';
  if (page.includes('API-tokens') || page.includes('Authentication') || page.includes('IP-allowlists') || page.includes('SSH-Keys') || page.includes('SSO') || page.includes('Agents')) return 'settings-security';
  if (page.startsWith('Settings-')) return 'settings-form';
  return 'overview-list';
}

function OverviewList() {
  return (
    <>
      <section style={card}>
        <div style={row('42%', 12)} />
        <div style={row('100%')} />
        <div style={row('88%')} />
      </section>
      <section style={card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 10 }}>
          <div style={row('100%', 12)} />
          <div style={row('100%', 12)} />
          <div style={row('100%', 12)} />
          <div style={row('100%', 12)} />
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 10 }}>
            <div style={row('100%')} />
            <div style={row('100%')} />
            <div style={row('100%')} />
            <div style={row('100%')} />
          </div>
        ))}
      </section>
    </>
  );
}

function RegistryLibrary() {
  return (
    <>
      <section style={{ ...card, display: 'grid', gridTemplateColumns: '220px 220px 1fr', gap: 10 }}>
        <div style={row('100%', 26)} />
        <div style={row('100%', 26)} />
        <div style={row('70%', 26)} />
      </section>
      <section style={card}>
        <div style={row('28%', 12)} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} style={{ border: '1px solid #d8d8d8', background: '#f6f6f6', padding: 10 }}>
              <div style={row('70%', 11)} />
              <div style={row('100%')} />
              <div style={row('82%')} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function SettingsForm() {
  return (
    <>
      <section style={card}>
        <div style={row('24%', 12)} />
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 12 }}>
          <div style={row('100%', 10)} />
          <div style={row('100%', 30)} />
          <div style={row('100%', 10)} />
          <div style={row('100%', 30)} />
          <div style={row('100%', 10)} />
          <div style={row('76%', 30)} />
        </div>
      </section>
      <section style={card}>
        <div style={row('18%', 12)} />
        <div style={row('100%')} />
        <div style={row('96%')} />
      </section>
    </>
  );
}

function SettingsTable() {
  return (
    <section style={card}>
      <div style={row('30%', 12)} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 10 }}>
        <div style={row('100%', 12)} />
        <div style={row('100%', 12)} />
        <div style={row('100%', 12)} />
        <div style={row('100%', 12)} />
      </div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 10 }}>
          <div style={row('100%')} />
          <div style={row('100%')} />
          <div style={row('100%')} />
          <div style={row('100%')} />
        </div>
      ))}
    </section>
  );
}

function SettingsActivity() {
  return (
    <>
      <section style={{ ...card, display: 'grid', gridTemplateColumns: '220px 220px 220px 1fr', gap: 10 }}>
        <div style={row('100%', 26)} />
        <div style={row('100%', 26)} />
        <div style={row('100%', 26)} />
        <div style={row('52%', 26)} />
      </section>
      <section style={card}>
        {Array.from({ length: 11 }).map((_, i) => (
          <article key={i} style={{ borderBottom: i === 10 ? 'none' : '1px solid #ececec', padding: '10px 0' }}>
            <div style={row('45%', 11)} />
            <div style={row('94%')} />
            <div style={row('70%')} />
          </article>
        ))}
      </section>
    </>
  );
}

function SettingsSecurity() {
  return (
    <>
      <section style={card}>
        <div style={row('30%', 12)} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ border: '1px solid #dfdfdf', background: '#f5f5f5', padding: 10 }}>
            <div style={row('65%', 11)} />
            <div style={row('100%')} />
            <div style={row('82%')} />
          </div>
          <div style={{ border: '1px solid #dfdfdf', background: '#f5f5f5', padding: 10 }}>
            <div style={row('65%', 11)} />
            <div style={row('100%')} />
            <div style={row('82%')} />
          </div>
        </div>
      </section>
      <section style={card}>
        <div style={row('20%', 12)} />
        <div style={row('100%', 34)} />
      </section>
    </>
  );
}

function OrganizationsScreen() {
  const selectedOrg = getSelectedOrganizationFromUrl();
  const hds = {
    border: 'var(--token-color-border-primary)',
    borderStrong: 'var(--token-color-border-strong)',
    bgPrimary: 'var(--token-color-palette-neutral-0)',
    bgFaint: 'var(--token-color-palette-neutral-50)',
    bgSubtle: 'var(--token-color-palette-neutral-100)',
    bgDark: 'var(--token-color-palette-neutral-700)',
    bgDarkMid: 'var(--token-color-palette-neutral-600)',
    textStrong: 'var(--token-color-foreground-strong)',
    textPrimary: 'var(--token-color-foreground-primary)',
    textFaint: 'var(--token-color-foreground-faint)',
    textHighContrast: 'var(--token-color-foreground-high-contrast)',
    action: 'var(--token-color-foreground-action)',
    actionSurface: 'var(--token-color-palette-blue-200)',
    actionSurfaceHover: 'var(--token-color-palette-blue-300)',
    radiusS: 'var(--token-border-radius-small)',
    radiusM: 'var(--token-border-radius-medium)',
    radiusL: 'var(--token-border-radius-large)',
  };

  const cardStyle: CSSProperties = {
    border: `1px solid ${hds.border}`,
    borderRadius: hds.radiusL,
    background: hds.bgPrimary,
  };

  const ghostButton: CSSProperties = {
    height: 34,
    padding: '0 14px',
    borderRadius: hds.radiusM,
    border: `1px solid ${hds.border}`,
    background: hds.bgPrimary,
    color: hds.textPrimary,
    fontSize: 13,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  };

  const primaryButton: CSSProperties = {
    ...ghostButton,
    border: 'none',
    background: hds.actionSurface,
    color: hds.textHighContrast,
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: '54px 1fr 38px', height: '100%', background: hds.bgPrimary, fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif' }}>
      <TopProductHeader />

      <section style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 0 }}>
        <aside style={{ borderRight: `1px solid ${hds.border}`, background: hds.bgFaint, padding: '18px 14px' }}>
          <a href={buildStoryHref('Organizations', selectedOrg)} style={{ width: '100%', height: 33, borderRadius: hds.radiusM, background: hds.bgSubtle, borderLeft: `3px solid ${hds.actionSurface}`, display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 12, color: hds.action, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
            <IconOrg16 color={hds.action} />
            Organizations
          </a>
        </aside>

        <main style={{ padding: '26px 30px', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
            <div>
              <h1 style={{ margin: '0 0 10px 0', fontSize: 30, lineHeight: 1.05, color: hds.textStrong }}>Organizations</h1>
              <p style={{ margin: 0, fontSize: 13, color: hds.textPrimary }}>Terraform organizations let you manage organizations, projects, and teams.</p>
            </div>
            <div style={{ ...primaryButton, width: 178, marginTop: 6, background: hds.actionSurfaceHover }}>
              + Create organization
            </div>
          </div>

          <div style={{ width: 330, height: 34, borderRadius: hds.radiusM, border: `1px solid ${hds.border}`, background: hds.bgPrimary, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', color: hds.textFaint, fontSize: 12 }}>
            <IconSearch16 color={hds.textFaint} />
            <span>Search by organization name</span>
          </div>

          <section style={{ ...cardStyle, overflow: 'hidden', marginBottom: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 120px', background: hds.bgSubtle, borderBottom: `1px solid ${hds.border}` }}>
              <div style={{ height: 42, borderRight: `1px solid ${hds.border}`, display: 'flex', alignItems: 'center', padding: '0 14px', fontWeight: 700, fontSize: 13, color: hds.textStrong }}>Organization name</div>
              <div style={{ height: 42, borderRight: `1px solid ${hds.border}`, display: 'flex', alignItems: 'center', padding: '0 14px', fontWeight: 700, fontSize: 13, color: hds.textStrong }}>Organization type</div>
              <div style={{ height: 42, display: 'flex', alignItems: 'center', justifyContent: 'end', padding: '0 14px', fontWeight: 700, fontSize: 13, color: hds.textStrong }}>Actions</div>
            </div>
            {organizationNames.map((org, i) => (
              <div key={org} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 120px', borderBottom: i === 1 ? 'none' : `1px solid ${hds.border}` }}>
                <div style={{ height: 54, borderRight: `1px solid ${hds.border}`, padding: '16px 14px' }}>
                  <a href={buildStoryHref('Projects', org)} style={{ fontSize: 13, color: hds.action, textDecoration: 'underline', fontWeight: 600 }}>{org}</a>
                </div>
                <div style={{ height: 54, borderRight: `1px solid ${hds.border}`, padding: '16px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#6f2dbd', fontSize: 12 }}>◆</span>
                  <span style={{ fontSize: 13, color: hds.textPrimary }}>Terraform standalone</span>
                </div>
                <div style={{ height: 54, padding: '14px 14px 0', display: 'flex', justifyContent: 'end' }}>
                  <div style={{ width: 30, height: 30, borderRadius: hds.radiusM, border: `1px solid ${hds.border}`, background: hds.bgPrimary, color: hds.textFaint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconMoreHorizontal16 color={hds.textFaint} />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: hds.textFaint }}>1-2 of 2</div>
            <div style={{ fontSize: 12, color: hds.action }}>1</div>
            <div style={{ ...ghostButton, width: 148, height: 26, fontSize: 13 }}>Items per page 10</div>
          </div>

          <h2 style={{ margin: '0 0 14px 0', fontSize: 24, lineHeight: 1.1, color: hds.textStrong }}>Invitations (1)</h2>

          <section style={{ ...cardStyle, background: hds.bgFaint, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ fontSize: 14, color: hds.textStrong, fontWeight: 600 }}>hashicorp-v2</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ ...primaryButton, width: 86 }}>Accept</div>
              <div style={{ ...ghostButton, width: 82 }}>Ignore</div>
            </div>
          </section>
        </main>
      </section>

      <footer style={{ borderTop: `1px solid ${hds.border}`, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 26, background: hds.bgPrimary }}>
        <span style={{ fontSize: 11, color: hds.textFaint }}>Support</span>
        <span style={{ fontSize: 11, color: hds.textFaint }}>Terms</span>
        <span style={{ fontSize: 11, color: hds.textFaint }}>Privacy</span>
        <span style={{ fontSize: 11, color: hds.textFaint }}>Security</span>
        <span style={{ fontSize: 11, color: hds.textFaint }}>Accessibility</span>
        <span style={{ fontSize: 11, color: hds.textFaint }}>© 2026 HashiCorp, an IBM Company</span>
      </footer>
    </div>
  );
}

function PageWireframe({ page }: { page: PageId }) {
  if (page === 'Organizations') {
    return <OrganizationsScreen />;
  }
  if (page === 'Projects') {
    return <ProjectsScreen />;
  }
  if (page === 'Workspaces') {
    return <WorkspacesScreen />;
  }
  if (page === 'Stacks') {
    return <StacksScreen />;
  }
  if (page === 'Usage') {
    return <UsageScreen />;
  }
  if (page === 'Settings-General') {
    return <SettingsGeneralScreen />;
  }

  const kind = inferTemplate(page);

  return (
    <div style={shell}>
      <aside style={leftRail}>
        <div style={navGroup}>
          <div style={navLabel} />
          <div style={navItem} />
          <div style={navItem} />
          <div style={{ ...navItem, width: '70%' }} />
        </div>
        <div style={navGroup}>
          <div style={navLabel} />
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} style={navItem} />
          ))}
        </div>
      </aside>

      <main style={main}>
        <header style={topBar}>
          <div style={pageTitle} />
          <div style={actionChip} />
        </header>

        <section style={content}>
          {kind === 'overview-list' && <OverviewList />}
          {kind === 'registry-library' && <RegistryLibrary />}
          {kind === 'settings-form' && <SettingsForm />}
          {kind === 'settings-table' && <SettingsTable />}
          {kind === 'settings-activity' && <SettingsActivity />}
          {kind === 'settings-security' && <SettingsSecurity />}
        </section>
      </main>
    </div>
  );
}

const meta: Meta<{ page: PageId }> = {
  title: 'Reference Images/Wireframes',
  component: PageWireframe,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<{ page: PageId }>;

function makeStory(page: PageId): Story {
  return {
    args: { page },
    parameters: {
      wireframeChrome: { title: formatTitle(page), height: '90vh' },
    },
  };
}

export const Organizations = makeStory('Organizations');
export const Projects = makeStory('Projects');
export const Workspaces = makeStory('Workspaces');
export const Stacks = makeStory('Stacks');
export const Usage = makeStory('Usage');
export const RegistryPrivateLibrary = makeStory('Registry-Private-Library');
export const RegistryPublicNamespaces = makeStory('Registry-Public-Namespaces');
export const SettingsGeneral = makeStory('Settings-General');
export const SettingsPlanBilling = makeStory('Settings-Plan&Billing');
export const SettingsTagManagement = makeStory('Settings-Tag-Management');
export const SettingsTeams = makeStory('Settings-Teams');
export const SettingsUsers = makeStory('Settings-Users');
export const SettingsVariableSets = makeStory('Settings-Variable-sets');
export const SettingsHealth = makeStory('Settings-Health');
export const SettingsRuns = makeStory('Settings-Runs');
export const SettingsCostEstimation = makeStory('Settings-Cost-Estimation');
export const SettingsPolicies = makeStory('Settings-Policies');
export const SettingsPolicySets = makeStory('Settings-Policy-sets');
export const SettingsRunTasks = makeStory('Settings-Run-tasks');
export const SettingsApiTokens = makeStory('Settings-API-tokens');
export const SettingsAgents = makeStory('Settings-Agents');
export const SettingsAuditing = makeStory('Settings-Auditing');
export const SettingsAuthentication = makeStory('Settings-Authentication');
export const SettingsIpAllowlists = makeStory('Settings-IP-allowlists');
export const SettingsSshKeys = makeStory('Settings-SSH-Keys');
export const SettingsSso = makeStory('Settings-SSO');
export const SettingsVersionControlVcsGeneral = makeStory('Settings-Version-control-VCS-General');
export const SettingsVersionControlVcsEvents = makeStory('Settings-Version-Control-VCS-Events');
export const SettingsVersionControlVcsProviders = makeStory('Settings-Version-Control-VCS-Providers');
