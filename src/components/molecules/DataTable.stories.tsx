import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DataTable, Column } from './DataTable';
import { Avatar } from '../atoms/Avatar';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

interface Member {
  id: number;
  name: string;
  email: string;
  joinedAt: string;
  credits: number;
  active: boolean;
}

const rows: Member[] = [
  { id: 1, name: '김민지', email: 'minji@litmers.com', joinedAt: '2026-01-14', credits: 24, active: true },
  { id: 2, name: '이도윤', email: 'doyun@litmers.com', joinedAt: '2026-02-03', credits: 8, active: true },
  { id: 3, name: '박서준', email: 'seojun@litmers.com', joinedAt: '2026-02-28', credits: 0, active: false },
  { id: 4, name: '최하늘', email: 'haneul@litmers.com', joinedAt: '2026-03-11', credits: 102, active: true },
];

const columns: Column<Member>[] = [
  {
    key: 'name',
    header: '이름',
    render: (r) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar name={r.name} size={28} />
        <span style={{ fontWeight: 500 }}>{r.name}</span>
      </div>
    ),
  },
  { key: 'email', header: '이메일', render: (r) => r.email },
  { key: 'joinedAt', header: '가입일', render: (r) => r.joinedAt },
  { key: 'credits', header: '크레딧', align: 'right', render: (r) => r.credits.toLocaleString() },
  {
    key: 'status',
    header: '상태',
    align: 'center',
    render: (r) => (
      <Badge tone={r.active ? 'positive' : 'neutral'}>{r.active ? '활성' : '비활성'}</Badge>
    ),
  },
  {
    key: 'actions',
    header: '액션',
    align: 'center',
    render: () => (
      <Button variant="secondary" size="sm">
        상세
      </Button>
    ),
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const MemberList: StoryObj = {
  name: '회원 관리 (실 사용)',
  render: () => <DataTable columns={columns} rows={rows} rowKey={(r) => r.id} />,
};

export const Empty: StoryObj = {
  render: () => (
    <DataTable
      columns={columns}
      rows={[]}
      rowKey={(r) => r.id}
      emptyMessage="검색 결과가 없습니다."
    />
  ),
};
