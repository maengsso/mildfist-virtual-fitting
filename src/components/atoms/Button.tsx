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

const sizeMap: Record<ButtonSize, { padding: string; fontSize: string; radius: string }> = {
  sm: { padding: '6px 12px', fontSize: typography.label.sm.fontSize, radius: radius.control },
  md: { padding: '8px 16px', fontSize: typography.label.md.fontSize, radius: radius.control },
  lg: { padding: '12px 24px', fontSize: typography.body.md.fontSize, radius: radius.card },
};

const variantMap: Record<ButtonVariant, CSSProperties> = {
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
  const variantStyles = variantMap[variant];
  const isCircular = variant === 'circular';

  const base: CSSProperties = {
    padding: isCircular ? 0 : sizeStyles.padding,
    borderRadius: isCircular ? radius.pill : sizeStyles.radius,
    fontSize: sizeStyles.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : undefined,
    transition: 'background-color 120ms ease',
  };

  return (
    <button {...rest} disabled={disabled} style={{ ...base, ...variantStyles, ...style }}>
      {children}
    </button>
  );
}
