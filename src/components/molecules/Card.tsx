'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, shadow } from '@/tokens';

export type CardVariant = 'flat' | 'outlined' | 'floating';

export interface CardProps {
  variant?: CardVariant;
  padding?: number | string;
  children?: ReactNode;
  style?: CSSProperties;
}

const variantMap: Record<CardVariant, CSSProperties> = {
  flat: {
    background: color.bg['layer-subtle'],
    border: 'none',
    boxShadow: shadow.card,
  },
  outlined: {
    background: color.bg['layer-default'],
    border: `1px solid ${color.stroke['neutral-muted']}`,
    boxShadow: shadow.card,
  },
  floating: {
    background: color.bg['layer-floating'],
    border: 'none',
    boxShadow: shadow.popover,
  },
};

export function Card({ variant = 'outlined', padding = 16, children, style }: CardProps) {
  const base: CSSProperties = {
    borderRadius: radius.card,
    padding,
  };

  return <div style={{ ...base, ...variantMap[variant], ...style }}>{children}</div>;
}
