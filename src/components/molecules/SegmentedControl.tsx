'use client';

import { CSSProperties } from 'react';
import { color, radius, typography } from '@/tokens';

export interface SegmentItem {
  id: string;
  label: string;
}

export interface SegmentedControlProps {
  items: SegmentItem[];
  activeId: string;
  onChange: (id: string) => void;
  style?: CSSProperties;
}

export function SegmentedControl({ items, activeId, onChange, style }: SegmentedControlProps) {
  const wrapper: CSSProperties = {
    display: 'flex',
    background: color.bg['layer-subtle'],
    borderRadius: radius.card,
    padding: 4,
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        const seg: CSSProperties = {
          flex: 1,
          padding: '8px 12px',
          fontSize: typography.label.md.fontSize,
          fontWeight: typography.label.md.fontWeight,
          lineHeight: typography.label.md.lineHeight,
          background: isActive ? color.bg['layer-floating'] : 'transparent',
          color: isActive ? color.fg['neutral-solid'] : color.fg['neutral-subtle'],
          borderRadius: radius.chip,
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 120ms ease, color 120ms ease',
        };
        return (
          <button key={item.id} type="button" onClick={() => onChange(item.id)} style={seg}>
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
