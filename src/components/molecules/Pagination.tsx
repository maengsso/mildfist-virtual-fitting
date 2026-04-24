'use client';

import { CSSProperties } from 'react';
import { color, typography } from '@/tokens';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  borderTop?: boolean;
  style?: CSSProperties;
}

export function Pagination({
  page,
  totalPages,
  onChange,
  borderTop = true,
  style,
}: PaginationProps) {
  const wrapper: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 0',
    borderTop: borderTop ? `1px solid ${color.stroke['neutral-muted']}` : 'none',
  };

  const btn = (isDisabled: boolean): CSSProperties => ({
    padding: '4px 12px',
    fontSize: typography.label.sm.fontSize,
    fontWeight: typography.label.sm.fontWeight,
    lineHeight: typography.label.sm.lineHeight,
    background: color.bg['neutral-muted'],
    color: color.fg['neutral-solid'],
    border: 'none',
    borderRadius: 8,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
  });

  const counter: CSSProperties = {
    fontSize: typography.label.sm.fontSize,
    color: color.fg['neutral-muted'],
  };

  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div style={{ ...wrapper, ...style }}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={prevDisabled}
        style={btn(prevDisabled)}
      >
        이전
      </button>
      <span style={counter}>
        {page} / {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={nextDisabled}
        style={btn(nextDisabled)}
      >
        다음
      </button>
    </div>
  );
}
