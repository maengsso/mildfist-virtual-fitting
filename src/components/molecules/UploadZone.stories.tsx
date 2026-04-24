import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UploadZone } from './UploadZone';

const meta: Meta<typeof UploadZone> = {
  title: 'Molecules/UploadZone',
  component: UploadZone,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof UploadZone>;

export const Default: Story = {
  args: {
    label: '내 사진을 여기에 드래그하세요',
    hint: 'JPG / PNG / 최대 10MB',
  },
};
