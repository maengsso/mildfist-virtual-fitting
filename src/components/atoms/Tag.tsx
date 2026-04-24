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
    padding: '6px 14px',
    borderRadius: radius.chip,
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    cursor: onClick ? 'pointer' : 'default',
    border: 'none',
    background: selected ? color.bg['brand-solid'] : color.bg['neutral-muted'],
    color: selected ? color.fg['neutral-inverted'] : color.fg['neutral-solid'],
    transition: 'background-color 120ms ease, color 120ms ease',
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
