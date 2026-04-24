'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, typography } from '@/tokens';

export interface InfoRowProps {
  label: ReactNode;
  value: ReactNode;
  style?: CSSProperties;
}

export function InfoRow({ label, value, style }: InfoRowProps) {
  const wrapper: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    padding: '12px 0',
    borderBottom: `1px solid ${color.stroke['neutral-muted']}`,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.body.md.fontWeight,
    lineHeight: typography.body.md.lineHeight,
    color: color.fg['neutral-muted'],
  };

  const valueStyle: CSSProperties = {
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    color: color.fg['neutral-solid'],
    textAlign: 'right',
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      <span style={labelStyle}>{label}</span>
      <span style={valueStyle}>{value}</span>
    </div>
  );
}
