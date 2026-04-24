'use client';

import { CSSProperties, ReactNode } from 'react';
import { primitive, typography } from '@/tokens';

export type BadgeTone =
  | 'neutral'
  | 'brand'
  | 'positive'
  | 'informative'
  | 'magic';

export type BadgeVariant = 'tinted' | 'overlay';

export interface BadgeProps {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  color?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const toneColorMap: Record<BadgeTone, string> = {
  neutral: primitive.gray[700],
  brand: primitive.red[500],
  positive: primitive.green[600],
  informative: primitive.blue[600],
  magic: primitive.purple[500],
};

export function Badge({ tone = 'neutral', variant = 'tinted', color, children, style }: BadgeProps) {
  const baseColor = color ?? toneColorMap[tone];

  let background: string;
  let fg: string;

  if (variant === 'overlay') {
    background = 'rgba(255, 255, 255, 0.85)';
    fg = primitive.gray[900];
  } else {
    background = `${baseColor}14`;
    fg = baseColor;
  }

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 8px',
    borderRadius: 8,
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    background,
    color: fg,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  return <span style={{ ...base, ...style }}>{children}</span>;
}
