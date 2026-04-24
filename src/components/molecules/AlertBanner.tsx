'use client';

import { CSSProperties, ReactNode } from 'react';
import { primitive, typography } from '@/tokens';

export type AlertTone = 'success' | 'error' | 'info' | 'neutral';

export interface AlertBannerProps {
  tone?: AlertTone;
  children?: ReactNode;
  style?: CSSProperties;
}

const toneColor: Record<AlertTone, string> = {
  success: primitive.green[600],
  error: primitive.red[500],
  info: primitive.blue[600],
  neutral: primitive.gray[700],
};

export function AlertBanner({ tone = 'neutral', children, style }: AlertBannerProps) {
  const c = toneColor[tone];
  const base: CSSProperties = {
    display: 'block',
    padding: '8px 12px',
    background: `${c}14`,
    color: c,
    borderRadius: 10,
    fontSize: typography.label.sm.fontSize,
    lineHeight: typography.label.sm.lineHeight,
  };
  return <div style={{ ...base, ...style }}>{children}</div>;
}
