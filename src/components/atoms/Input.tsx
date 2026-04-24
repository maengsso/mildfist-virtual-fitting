'use client';

import { CSSProperties, InputHTMLAttributes, forwardRef } from 'react';
import { color, radius, typography } from '@/tokens';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, style, ...rest },
  ref,
) {
  const base: CSSProperties = {
    width: '100%',
    padding: '10px 16px',
    borderRadius: radius.card,
    border: `1px solid ${invalid ? color.stroke['brand-solid'] : color.stroke['neutral-solid']}`,
    background: color.bg['layer-default'],
    color: color.fg['neutral-solid'],
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.body.md.fontWeight,
    lineHeight: typography.body.md.lineHeight,
    outline: 'none',
    transition: 'border-color 120ms ease',
  };

  return <input ref={ref} {...rest} style={{ ...base, ...style }} />;
});
