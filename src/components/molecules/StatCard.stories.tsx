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

export const Default: Story = {
  args: { label: '총 사용자', value: '12,480' },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      <StatCard label="총 사용자" value="12,480" />
      <StatCard label="오늘 피팅" value="842" />
      <StatCard label="총 매출" value="₩ 3.2M" />
      <StatCard label="활성 구독" value="1,290" />
    </div>
  ),
};
