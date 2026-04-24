'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';

export interface SidebarNavItem {
  key: string;
  label: string;
  icon?: ReactNode;
}

export interface SidebarNavProps {
  title?: string;
  items: SidebarNavItem[];
  activeKey: string;
  onChange: (key: string) => void;
  width?: number;
  style?: CSSProperties;
}

export function SidebarNav({
  title = '관리자 패널',
  items,
  activeKey,
  onChange,
  width = 220,
  style,
}: SidebarNavProps) {
  const aside: CSSProperties = {
    width,
    borderRight: `1px solid ${color.stroke['neutral-muted']}`,
    background: color.bg['layer-default'],
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
  };

  const titleStyle: CSSProperties = {
    fontSize: typography.body.sm.fontSize,
    fontWeight: typography.heading.sm.fontWeight,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: color.fg['neutral-subtle'],
    padding: '0 12px',
    marginBottom: 24,
  };

  return (
    <aside style={{ ...aside, ...style }}>
      <span style={titleStyle}>{title}</span>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((item) => {
          const isActive = item.key === activeKey;
          const linkStyle: CSSProperties = {
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 12px',
            fontSize: typography.body.md.fontSize,
            fontWeight: isActive
              ? typography.heading.md.fontWeight
              : typography.body.md.fontWeight,
            color: isActive ? color.fg['brand-solid'] : color.fg['neutral-solid'],
            background: isActive ? color.bg['layer-subtle'] : 'transparent',
            borderRadius: radius.chip,
            borderLeft: `3px solid ${isActive ? color.bg['brand-solid'] : 'transparent'}`,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 120ms ease',
          };
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              style={linkStyle}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
