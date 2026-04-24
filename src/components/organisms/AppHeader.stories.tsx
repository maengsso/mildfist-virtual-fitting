import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AppHeader } from './AppHeader';

const meta: Meta<typeof AppHeader> = {
  title: 'Organisms/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const LoggedIn: Story = {
  args: { user: { name: '밀드' } },
};

export const LoggedOut: Story = {};
