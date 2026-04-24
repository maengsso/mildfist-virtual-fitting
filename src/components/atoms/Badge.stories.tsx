import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'brand', 'positive', 'critical', 'informative', 'magic'],
    },
  },
  args: { children: '배지' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};
export const Brand: Story = { args: { tone: 'brand' } };
export const Positive: Story = { args: { tone: 'positive' } };
export const Critical: Story = { args: { tone: 'critical' } };
export const Informative: Story = { args: { tone: 'informative' } };
export const Magic: Story = { args: { tone: 'magic' } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="neutral">기본</Badge>
      <Badge tone="brand">브랜드</Badge>
      <Badge tone="positive">성공</Badge>
      <Badge tone="critical">경고</Badge>
      <Badge tone="informative">안내</Badge>
      <Badge tone="magic">프리미엄</Badge>
    </div>
  ),
};
