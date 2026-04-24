'use client';

import { CSSProperties, InputHTMLAttributes } from 'react';
import { color, radius, typography } from '@/tokens';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperStyle?: CSSProperties;
}

export function SearchBar({ wrapperStyle, style, placeholder = '검색', ...rest }: SearchBarProps) {
  const wrapperBase: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 16px',
    background: color.bg['layer-subtle'],
    borderRadius: radius.modal,
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color.fg['neutral-subtle']} strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      <input {...rest} placeholder={placeholder} style={{ ...inputBase, ...style }} />
    </div>
  );
}
