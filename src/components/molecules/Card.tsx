'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, shadow } from '@/tokens';

export type CardVariant = 'flat' | 'outlined' | 'floating';

export interface CardProps {
  variant?: CardVariant;
  padding?: number | string;
  radiusOverride?: 'chip' | 'card' | 'modal';
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

export function Card({
  variant = 'flat',
  padding = 16,
  radiusOverride = 'card',
  children,
  style,
}: CardProps) {
  const base: CSSProperties = {
    borderRadius:
      radiusOverride === 'modal'
        ? radius.modal
        : radiusOverride === 'chip'
          ? radius.chip
          : radius.card,
    padding,
  };

  return <div style={{ ...base, ...variantMap[variant], ...style }}>{children}</div>;
}
