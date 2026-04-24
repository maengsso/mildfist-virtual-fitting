'use client';

import { CSSProperties } from 'react';
import { color, radius, typography } from '@/tokens';

export interface TabItem {
  id: string;
  label: string;
}

export interface TabNavigationProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  style?: CSSProperties;
}

export function TabNavigation({ items, activeId, onChange, style }: TabNavigationProps) {
  const wrapper: CSSProperties = {
    display: 'flex',
    gap: 16,
    borderBottom: `1px solid ${color.stroke['neutral-muted']}`,
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        const tabBase: CSSProperties = {
          position: 'relative',
          padding: '12px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: typography.label.md.fontSize,
          fontWeight: typography.label.md.fontWeight,
          color: isActive ? color.fg['brand-solid'] : color.fg['neutral-muted'],
        };
        const underline: CSSProperties = {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          height: 2.5,
          borderRadius: radius.tab,
          background: isActive ? color.bg['brand-solid'] : 'transparent',
        };
        return (
          <button key={item.id} type="button" onClick={() => onChange(item.id)} style={tabBase}>
            {item.label}
            <span style={underline} aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
