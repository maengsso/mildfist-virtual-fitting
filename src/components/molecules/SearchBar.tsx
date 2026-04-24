'use client';

import { CSSProperties, InputHTMLAttributes } from 'react';
import { color, radius, typography } from '@/tokens';

export type SearchBarVariant = 'header' | 'compact';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: SearchBarVariant;
  wrapperStyle?: CSSProperties;
}

export function SearchBar({
  variant = 'header',
  wrapperStyle,
  style,
  placeholder = '검색',
  ...rest
}: SearchBarProps) {
  const wrapperBase: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    background: color.bg['layer-subtle'],
    borderRadius: variant === 'compact' ? radius.chip : radius.modal,
    width: '100%',
  };

  const inputBase: CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: color.fg['neutral-solid'],
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.body.md.fontWeight,
    lineHeight: typography.body.md.lineHeight,
  };

  return (
    <div style={{ ...wrapperBase, ...wrapperStyle }}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color.fg['neutral-subtle']}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input {...rest} placeholder={placeholder} style={{ ...inputBase, ...style }} />
    </div>
  );
}
