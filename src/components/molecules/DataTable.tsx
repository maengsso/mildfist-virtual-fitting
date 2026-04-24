'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';

export type TableAlign = 'left' | 'right' | 'center';

export interface Column<Row> {
  key: string;
  header: ReactNode;
  align?: TableAlign;
  render: (row: Row) => ReactNode;
}

export interface DataTableProps<Row> {
  columns: Column<Row>[];
  rows: Row[];
  rowKey: (row: Row) => string | number;
  emptyMessage?: ReactNode;
  onRowClick?: (row: Row) => void;
  minWidth?: number;
  style?: CSSProperties;
}

export function DataTable<Row>({
  columns,
  rows,
  rowKey,
  emptyMessage = '데이터가 없습니다.',
  onRowClick,
  minWidth = 700,
  style,
}: DataTableProps<Row>) {
  const wrapper: CSSProperties = {
    border: `1px solid ${color.stroke['neutral-muted']}`,
    borderRadius: radius.card,
    overflow: 'hidden',
  };

  const cellBase: CSSProperties = {
    padding: '12px 16px',
    fontSize: typography.body.md.fontSize,
    lineHeight: typography.body.md.lineHeight,
  };

  const headerCell: CSSProperties = {
    ...cellBase,
    fontWeight: typography.label.md.fontWeight,
    color: color.fg['neutral-muted'],
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: color.bg['layer-subtle'] }}>
              {columns.map((c) => (
                <th key={c.key} style={{ ...headerCell, textAlign: c.align ?? 'left' }}>
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{
                    ...cellBase,
                    textAlign: 'center',
                    color: color.fg['neutral-muted'],
                    padding: '48px 16px',
                  }}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={rowKey(row)}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  style={{
                    borderTop: `1px solid ${color.stroke['neutral-muted']}`,
                    cursor: onRowClick ? 'pointer' : 'default',
                    color: color.fg['neutral-solid'],
                  }}
                >
                  {columns.map((c) => (
                    <td key={c.key} style={{ ...cellBase, textAlign: c.align ?? 'left' }}>
                      {c.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
