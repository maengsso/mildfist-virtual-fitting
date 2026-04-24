'use client';

import { CSSProperties, ReactNode } from 'react';
import { primitive, typography } from '@/tokens';

export type BadgeTone =
  | 'neutral'
  | 'brand'
  | 'positive'
  | 'informative'
  | 'magic';

export type BadgeVariant = 'tinted' | 'overlay' | 'solid' | 'micro';

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
  let padding: string;
  let borderRadius: number;
  let fontSize: string;

  switch (variant) {
    case 'overlay':
      background = 'rgba(255, 255, 255, 0.85)';
      fg = primitive.gray[900];
      padding = '2px 8px';
      borderRadius = 8;
      fontSize = typography.label.sm.fontSize;
      break;
    case 'solid':
      background = baseColor;
      fg = primitive.gray['00'];
      padding = '2px 8px';
      borderRadius = 8;
      fontSize = typography.label.sm.fontSize;
      break;
    case 'micro':
      background = baseColor;
      fg = primitive.gray['00'];
      padding = '2px 6px';
      borderRadius = 6;
      fontSize = '10px';
      break;
    case 'tinted':
    default:
      background = `${baseColor}14`;
      fg = baseColor;
      padding = '2px 8px';
      borderRadius = 8;
      fontSize = typography.label.sm.fontSize;
      break;
  }

  const styleBase: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding,
    borderRadius,
    fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    background,
    color: fg,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  return <span style={{ ...styleBase, ...style }}>{children}</span>;
}
