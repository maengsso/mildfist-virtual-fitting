import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = { args: { placeholder: '핀 검색' } };
export const WithValue: Story = {
  args: { placeholder: '검색', defaultValue: '드레스', readOnly: true },
};
