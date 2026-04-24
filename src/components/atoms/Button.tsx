'use client';

import { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import { color, primitive, radius, typography } from '@/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'circular';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTone = 'brand' | 'positive' | 'critical' | 'neutral';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  children?: ReactNode;
  fullWidth?: boolean;
}

const sizeMap: Record<
  ButtonSize,
  {
    padding: string;
    fontSize: string;
    fontWeight: number;
    radius: string | number;
    gap: number;
  }
> = {
  xs: {
    padding: '4px 12px',
    fontSize: typography.body.sm.fontSize,
    fontWeight: typography.body.sm.fontWeight,
    radius: 8,
    gap: 4,
  },
  sm: {
    padding: '6px 14px',
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    radius: radius.chip,
    gap: 4,
  },
  md: {
    padding: '8px 20px',
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    radius: radius.control,
    gap: 8,
  },
  lg: {
    padding: '12px 20px',
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    radius: radius.control,
    gap: 8,
  },
  xl: {
    padding: '12px 24px',
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    radius: radius.modal,
    gap: 8,
  },
};

const toneColorMap: Record<ButtonTone, string> = {
  brand: primitive.red[500],
  positive: primitive.green[600],
  critical: primitive.red[700],
  neutral: primitive.gray[500],
};

const variantBase: Record<
  Exclude<ButtonVariant, 'outline' | 'circular'>,
  CSSProperties
> = {
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
};

const circularBase: CSSProperties = {
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
};

const disabledStyle: CSSProperties = {
  background: color.bg['neutral-muted'],
  color: color.fg['neutral-subtle'],
  cursor: 'not-allowed',
  border: 'none',
};

export function Button({
  variant = 'primary',
  size = 'lg',
  tone = 'brand',
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
    fontWeight: s.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    cursor: 'pointer',
    width: fullWidth ? '100%' : undefined,
    transition: 'background-color 120ms ease, border-color 120ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
  };

  let variantStyle: CSSProperties;
  if (variant === 'circular') {
    variantStyle = circularBase;
  } else if (variant === 'outline') {
    const toneColor = toneColorMap[tone];
    variantStyle = {
      background: 'transparent',
      color: toneColor,
      border: `1px solid ${toneColor}`,
    };
  } else {
    variantStyle = variantBase[variant];
  }

  const composed = {
    ...base,
    ...variantStyle,
    ...(disabled ? disabledStyle : null),
    ...style,
  };

  return (
    <button {...rest} disabled={disabled} style={composed}>
      {children}
    </button>
  );
}
