'use client';

import { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import { color, radius, typography } from '@/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'circular';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  fullWidth?: boolean;
}

const sizeMap: Record<
  ButtonSize,
  { padding: string; fontSize: string; radius: string; gap: number }
> = {
  sm: { padding: '6px 14px', fontSize: typography.label.sm.fontSize, radius: radius.chip, gap: 4 },
  md: { padding: '8px 20px', fontSize: typography.label.md.fontSize, radius: radius.control, gap: 8 },
  lg: { padding: '12px 20px', fontSize: typography.label.md.fontSize, radius: radius.control, gap: 8 },
  xl: { padding: '12px 24px', fontSize: typography.label.md.fontSize, radius: radius.modal, gap: 8 },
};

const variantBase: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: color.bg['brand-solid'],
    color: color.fg['neutral-inverted'],
    border: 'none',
  },
  secondary: {
    background: color.bg['neutral-muted'],
    color: color.fg['neutral-solid'],
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: color.fg['neutral-solid'],
    border: 'none',
  },
  circular: {
    background: color.bg['neutral-muted'],
    color: color.fg['neutral-solid'],
    border: 'none',
    borderRadius: radius.pill,
    width: 44,
    height: 44,
    padding: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const disabledStyle: CSSProperties = {
  background: color.bg['neutral-muted'],
  color: color.fg['neutral-subtle'],
  cursor: 'not-allowed',
};

export function Button({
  variant = 'primary',
  size = 'lg',
  fullWidth,
  style,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const s = sizeMap[size];
  const isCircular = variant === 'circular';

  const base: CSSProperties = {
    padding: isCircular ? 0 : s.padding,
    borderRadius: isCircular ? radius.pill : s.radius,
    fontSize: s.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    cursor: 'pointer',
    width: fullWidth ? '100%' : undefined,
    transition: 'background-color 120ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
  };

  const composed = {
    ...base,
    ...variantBase[variant],
    ...(disabled ? disabledStyle : null),
    ...style,
  };

  return (
    <button {...rest} disabled={disabled} style={composed}>
      {children}
    </button>
  );
}
