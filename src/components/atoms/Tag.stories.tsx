import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
  },
  args: { children: '👗 드레스' },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag selected>👗 드레스</Tag>
      <Tag>👕 셔츠</Tag>
      <Tag>👖 팬츠</Tag>
      <Tag>👟 슈즈</Tag>
    </div>
  ),
};
