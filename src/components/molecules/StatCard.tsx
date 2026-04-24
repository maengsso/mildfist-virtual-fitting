'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';

export interface StatCardProps {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  style?: CSSProperties;
}

export function StatCard({ label, value, icon, style }: StatCardProps) {
  const wrapper: CSSProperties = {
    background: color.bg['layer-default'],
    border: `1px solid ${color.stroke['neutral-muted']}`,
    borderRadius: radius.card,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    color: color.fg['neutral-muted'],
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  const valueStyle: CSSProperties = {
    fontSize: 24,
    fontWeight: typography.heading.xl.fontWeight,
    lineHeight: typography.heading.xl.lineHeight,
    color: color.fg['neutral-solid'],
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      <span style={labelStyle}>
        {icon}
        {label}
      </span>
      <span style={valueStyle}>{value}</span>
    </div>
  );
}
