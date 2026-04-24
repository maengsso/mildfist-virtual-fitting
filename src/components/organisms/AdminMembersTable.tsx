'use client';

import { CSSProperties, useState } from 'react';
import { color, radius, typography } from '@/tokens';
import { Avatar } from '../atoms/Avatar';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Pagination } from '../molecules/Pagination';

export interface AdminMember {
  id: number;
  name: string;
  email: string;
  credits: number;
  is_active: number;
  is_admin: number;
  style_count: number;
  created_at: string;
}

export interface MemberDetail {
  styles: { id: number; image_url: string; likes_count: number; is_hidden: number }[];
  creditHistory: { id: number; amount: number; description: string }[];
}

export interface AdminMembersTableProps {
  members: AdminMember[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onToggleActive?: (id: number, currentActive: number) => void;
  fetchDetail?: (id: number) => Promise<MemberDetail | null>;
  style?: CSSProperties;
}

export function AdminMembersTable({
  members,
  page,
  totalPages,
  onPageChange,
  onToggleActive,
  fetchDetail,
  style,
}: AdminMembersTableProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [detail, setDetail] = useState<MemberDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  async function toggleExpand(id: number) {
    if (expandedId === id) {
      setExpandedId(null);
      setDetail(null);
      return;
    }
    setExpandedId(id);
    if (!fetchDetail) return;
    setDetailLoading(true);
    const d = await fetchDetail(id);
    setDetail(d);
    setDetailLoading(false);
  }

  const wrapper: CSSProperties = {
    border: `1px solid ${color.stroke['neutral-muted']}`,
    borderRadius: radius.card,
    overflow: 'hidden',
  };

  const cell: CSSProperties = {
    padding: '12px 16px',
    fontSize: typography.body.md.fontSize,
    lineHeight: typography.body.md.lineHeight,
  };

  const headerCell: CSSProperties = {
    ...cell,
    fontWeight: typography.label.md.fontWeight,
    color: color.fg['neutral-muted'],
  };

  return (
    <div style={{ ...wrapper, ...style }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: 700, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: color.bg['layer-subtle'] }}>
              <th style={{ ...headerCell, textAlign: 'left' }}>이름</th>
              <th style={{ ...headerCell, textAlign: 'left' }}>이메일</th>
              <th style={{ ...headerCell, textAlign: 'left' }}>가입일</th>
              <th style={{ ...headerCell, textAlign: 'right' }}>크레딧</th>
              <th style={{ ...headerCell, textAlign: 'right' }}>스타일</th>
              <th style={{ ...headerCell, textAlign: 'center' }}>상태</th>
              <th style={{ ...headerCell, textAlign: 'center' }}>액션</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    ...cell,
                    textAlign: 'center',
                    color: color.fg['neutral-muted'],
                    padding: '48px 16px',
                  }}
                >
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              members.map((m) => (
                <MemberRow
                  key={m.id}
                  member={m}
                  expanded={expandedId === m.id}
                  detail={expandedId === m.id ? detail : null}
                  detailLoading={expandedId === m.id && detailLoading}
                  onToggle={() => toggleExpand(m.id)}
                  onToggleActive={onToggleActive}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 ? (
        <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
      ) : null}
    </div>
  );
}

function MemberRow({
  member,
  expanded,
  detail,
  detailLoading,
  onToggle,
  onToggleActive,
}: {
  member: AdminMember;
  expanded: boolean;
  detail: MemberDetail | null;
  detailLoading: boolean;
  onToggle: () => void;
  onToggleActive?: (id: number, currentActive: number) => void;
}) {
  const cell: CSSProperties = {
    padding: '12px 16px',
    fontSize: typography.body.md.fontSize,
    lineHeight: typography.body.md.lineHeight,
  };

  const active = member.is_active === 1;

  return (
    <>
      <tr
        onClick={onToggle}
        style={{
          borderTop: `1px solid ${color.stroke['neutral-muted']}`,
          cursor: 'pointer',
          color: color.fg['neutral-solid'],
          transition: 'background-color 120ms ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = color.bg['layer-subtle'])}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <td style={cell}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Avatar name={member.name} size={28} />
            <span style={{ fontWeight: 500 }}>{member.name}</span>
            {member.is_admin === 1 ? (
              <Badge variant="micro" tone="brand">
                관리자
              </Badge>
            ) : null}
          </div>
        </td>
        <td style={{ ...cell, color: color.fg['neutral-muted'] }}>{member.email}</td>
        <td style={{ ...cell, color: color.fg['neutral-muted'] }}>
          {new Date(member.created_at).toLocaleDateString('ko-KR')}
        </td>
        <td style={{ ...cell, textAlign: 'right', fontWeight: 500 }}>{member.credits}</td>
        <td style={{ ...cell, textAlign: 'right' }}>{member.style_count}</td>
        <td style={{ ...cell, textAlign: 'center' }}>
          <Badge tone={active ? 'positive' : 'brand'}>{active ? '활성' : '비활성'}</Badge>
        </td>
        <td
          style={{ ...cell, textAlign: 'center' }}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="outline"
            tone={active ? 'brand' : 'positive'}
            size="xs"
            onClick={() => onToggleActive?.(member.id, member.is_active)}
          >
            {active ? '비활성화' : '활성화'}
          </Button>
        </td>
      </tr>
      {expanded ? (
        <tr>
          <td colSpan={7} style={{ background: color.bg['layer-subtle'], padding: 0 }}>
            <DetailPanel loading={detailLoading} detail={detail} />
          </td>
        </tr>
      ) : null}
    </>
  );
}

function DetailPanel({
  loading,
  detail,
}: {
  loading: boolean;
  detail: MemberDetail | null;
}) {
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: 32 }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{ animation: 'spin 1s linear infinite', color: color.fg['brand-solid'] }}
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.2" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (!detail) return null;

  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <section>
        <h4
          style={{
            fontSize: typography.label.sm.fontSize,
            fontWeight: typography.heading.sm.fontWeight,
            color: color.fg['neutral-muted'],
            margin: 0,
            marginBottom: 8,
          }}
        >
          스타일 ({detail.styles.length})
        </h4>
        {detail.styles.length === 0 ? (
          <p style={{ fontSize: typography.label.sm.fontSize, color: color.fg['neutral-subtle'] }}>
            없음
          </p>
        ) : (
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
            {detail.styles.map((s) => (
              <div key={s.id} style={{ width: 60, flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image_url}
                  alt=""
                  style={{
                    width: '100%',
                    height: 60,
                    objectFit: 'cover',
                    borderRadius: 8,
                    opacity: s.is_hidden ? 0.4 : 1,
                    background: color.bg['layer-subtle'],
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill={color.fg['brand-solid']}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span style={{ fontSize: 11, color: color.fg['neutral-subtle'] }}>
                    {s.likes_count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h4
          style={{
            fontSize: typography.label.sm.fontSize,
            fontWeight: typography.heading.sm.fontWeight,
            color: color.fg['neutral-muted'],
            margin: 0,
            marginBottom: 8,
          }}
        >
          크레딧 내역
        </h4>
        {detail.creditHistory.length === 0 ? (
          <p style={{ fontSize: typography.label.sm.fontSize, color: color.fg['neutral-subtle'] }}>
            없음
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {detail.creditHistory.slice(0, 5).map((tx) => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: typography.label.sm.fontSize,
                }}
              >
                <span style={{ color: color.fg['neutral-solid'] }}>{tx.description}</span>
                <span
                  style={{
                    color: tx.amount > 0 ? color.fg['positive-solid'] : color.fg['brand-solid'],
                    fontWeight: 500,
                  }}
                >
                  {tx.amount > 0 ? '+' : ''}
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
