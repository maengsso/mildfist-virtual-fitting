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
  };

  const header: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.body.sm.fontSize,
    fontWeight: typography.body.sm.fontWeight,
    lineHeight: typography.body.sm.lineHeight,
    color: color.fg['neutral-muted'],
  };

  const valueStyle: CSSProperties = {
    fontSize: 28,
    fontWeight: typography.heading.xl.fontWeight,
    lineHeight: typography.heading.xl.lineHeight,
    color: color.fg['neutral-solid'],
    margin: 0,
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      <div style={header}>
        <span style={labelStyle}>{label}</span>
        {icon}
      </div>
      <p style={valueStyle}>{value}</p>
    </div>
  );
}
