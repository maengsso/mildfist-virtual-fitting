import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

const Icon = ({ path }: { path: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#91918c"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

export const Default: Story = {
  args: { label: '총 사용자', value: '12,480' },
};

export const AdminDashboardGrid: Story = {
  name: '관리자 대시보드 (실 사용)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
        maxWidth: 880,
      }}
    >
      <StatCard
        label="총 회원수"
        value="12,480"
        icon={<Icon path="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />}
      />
      <StatCard
        label="오늘 활동"
        value="842"
        icon={<Icon path="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />}
      />
      <StatCard
        label="오늘 피팅"
        value="312"
        icon={<Icon path="M6 3v12 M18 9a3 3 0 0 1-3 3H6" />}
      />
      <StatCard
        label="총 충전"
        value="₩ 3.2M"
        icon={<Icon path="M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
      />
    </div>
  ),
};
