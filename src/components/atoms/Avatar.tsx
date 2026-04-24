'use client';

import { CSSProperties } from 'react';
import { color, typography, radius } from '@/tokens';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  style?: CSSProperties;
}

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64,
};

export function Avatar({ name = '', src, size = 'md', style }: AvatarProps) {
  const dimension = sizeMap[size];
  const initial = name.trim().slice(0, 1).toUpperCase() || '?';

  const base: CSSProperties = {
    width: dimension,
    height: dimension,
    borderRadius: radius.pill,
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: color.bg['neutral-muted'],
    color: color.fg['neutral-solid'],
    fontSize: dimension < 40 ? typography.label.sm.fontSize : typography.label.md.fontSize,
    fontWeight: typography.heading.sm.fontWeight,
    flexShrink: 0,
  };

  if (src) {
    return (
      <span style={{ ...base, ...style }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </span>
    );
  }

  return <span style={{ ...base, ...style }}>{initial}</span>;
}
