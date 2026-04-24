import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['flat', 'outlined', 'floating'] },
  },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Outlined: Story = {
  args: { children: '카드 내용이 여기에 들어갑니다.' },
};

export const Flat: Story = {
  args: { variant: 'flat', children: '부드러운 배경 카드' },
};

export const Floating: Story = {
  args: { variant: 'floating', children: '떠있는 카드 (드롭다운, 모달용)' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 520 }}>
      <Card variant="outlined">outlined — 기본 카드</Card>
      <Card variant="flat">flat — 섹션 구분용</Card>
      <Card variant="floating">floating — 오버레이용</Card>
    </div>
  ),
};
