import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AlertBanner } from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Molecules/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: { tone: { control: 'select', options: ['success', 'error', 'info', 'neutral'] } },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Success: Story = {
  args: { tone: 'success', children: '김지우님에게 +50 크레딧 처리 완료 (잔액: 62)' },
};
export const Error: Story = {
  args: { tone: 'error', children: '크레딧 처리 중 오류가 발생했습니다.' },
};
export const Info: Story = {
  args: { tone: 'info', children: '프로토타입 — 실제 결제는 이루어지지 않습니다.' },
};
