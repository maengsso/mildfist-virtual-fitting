import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InfoRow } from './InfoRow';

const meta: Meta<typeof InfoRow> = {
  title: 'Molecules/InfoRow',
  component: InfoRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof InfoRow>;

export const Default: Story = {
  args: { label: '이름', value: '김민수' },
};

export const Stack: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <InfoRow label="이름" value="김민수" />
      <InfoRow label="이메일" value="kim@litmers.com" />
      <InfoRow label="가입일" value="2026-01-15" />
      <InfoRow label="구독" value="프리미엄" />
    </div>
  ),
};
