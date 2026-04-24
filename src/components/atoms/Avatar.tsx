'use client';

import { CSSProperties } from 'react';
import { color, radius } from '@/tokens';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize | number;
  style?: CSSProperties;
}

const namedSize: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64,
};

function fontSizeForDimension(d: number): number {
  if (d <= 32) return 12;
  if (d <= 48) return 14;
  return 20;
}

export function Avatar({ name = '', src, size = 'md', style }: AvatarProps) {
  const dimension = typeof size === 'number' ? size : namedSize[size];
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
    fontSize: fontSizeForDimension(dimension),
    fontWeight: 600,
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
