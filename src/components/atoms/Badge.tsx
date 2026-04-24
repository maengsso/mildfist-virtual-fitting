'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';

export type BadgeTone =
  | 'neutral'
  | 'brand'
  | 'positive'
  | 'critical'
  | 'informative'
  | 'magic';

export interface BadgeProps {
  tone?: BadgeTone;
  children?: ReactNode;
  style?: CSSProperties;
}

const toneMap: Record<BadgeTone, CSSProperties> = {
  neutral: { background: color.bg['neutral-muted'], color: color.fg['neutral-solid'] },
  brand: { background: color.bg['brand-weak'], color: color.fg['brand-solid'] },
  positive: { background: color.bg['positive-weak'], color: color.fg['positive-solid'] },
  critical: { background: color.bg['critical-weak'], color: color.fg['critical-solid'] },
  informative: {
    background: color.bg['informative-weak'],
    color: color.fg['informative-solid'],
  },
  magic: { background: color.bg['magic-weak'], color: color.fg['magic-solid'] },
};

export function Badge({ tone = 'neutral', children, style }: BadgeProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: radius.pill,
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    whiteSpace: 'nowrap',
  };

  return <span style={{ ...base, ...toneMap[tone], ...style }}>{children}</span>;
}
