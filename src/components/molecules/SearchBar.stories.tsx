import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SearchBar } from './SearchBar';
import { Button } from '../atoms/Button';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const HeaderVariant: Story = {
  name: 'Header (radius 20)',
  args: { variant: 'header', placeholder: '스타일 검색...' },
};

export const CompactVariant: Story = {
  name: 'Admin Compact (radius 12, with submit button)',
  render: () => (
    <form style={{ display: 'flex', gap: 8 }}>
      <SearchBar variant="compact" placeholder="이름 또는 이메일로 검색..." />
      <Button variant="secondary" size="md">
        검색
      </Button>
    </form>
  ),
};
