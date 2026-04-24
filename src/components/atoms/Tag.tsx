'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';

export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Tag({ selected, onClick, children, style }: TagProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    borderRadius: radius.pill,
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    cursor: onClick ? 'pointer' : 'default',
    border: `1px solid ${selected ? color.stroke['brand-solid'] : color.stroke['neutral-muted']}`,
    background: selected ? color.bg['brand-solid'] : color.bg['layer-default'],
    color: selected ? color.fg['neutral-inverted'] : color.fg['neutral-solid'],
    transition: 'all 120ms ease',
  };

  if (onClick) {
    return (
      <button type="button" onClick={onClick} style={{ ...base, ...style }}>
        {children}
      </button>
    );
  }

  return <span style={{ ...base, ...style }}>{children}</span>;
}
