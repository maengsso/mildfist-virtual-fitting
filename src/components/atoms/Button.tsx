'use client';

import { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import { color, radius, typography } from '@/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'circular';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, { padding: string; fontSize: string }> = {
  sm: { padding: '6px 14px', fontSize: typography.label.sm.fontSize },
  md: { padding: '12px 20px', fontSize: typography.label.md.fontSize },
  lg: { padding: '14px 24px', fontSize: typography.body.lg.fontSize },
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
  size = 'md',
  fullWidth,
  style,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const sizeStyles = sizeMap[size];
  const isCircular = variant === 'circular';

  const base: CSSProperties = {
    padding: isCircular ? 0 : sizeStyles.padding,
    borderRadius: isCircular ? radius.pill : radius.control,
    fontSize: sizeStyles.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    cursor: 'pointer',
    width: fullWidth ? '100%' : undefined,
    transition: 'background-color 120ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
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
