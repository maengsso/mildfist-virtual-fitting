'use client';

import { CSSProperties, InputHTMLAttributes, forwardRef } from 'react';
import { color, radius, typography } from '@/tokens';

export type InputVariant = 'outlined' | 'filled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = 'outlined', invalid, style, ...rest },
  ref,
) {
  const common: CSSProperties = {
    width: '100%',
    color: color.fg['neutral-solid'],
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.body.md.fontWeight,
    lineHeight: typography.body.md.lineHeight,
    outline: 'none',
    transition: 'border-color 120ms ease, background-color 120ms ease',
  };

  const variantStyle: CSSProperties =
    variant === 'filled'
      ? {
          padding: '8px 12px',
          borderRadius: 10,
          border: 'none',
          background: color.bg['layer-subtle'],
        }
      : {
          padding: '10px 16px',
          borderRadius: radius.card,
          border: `1px solid ${
            invalid ? color.stroke['brand-solid'] : color.stroke['neutral-solid']
          }`,
          background: color.bg['layer-default'],
        };

  return <input ref={ref} {...rest} style={{ ...common, ...variantStyle, ...style }} />;
});
