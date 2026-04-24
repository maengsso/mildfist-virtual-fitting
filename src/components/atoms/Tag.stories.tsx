import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
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

export const FittingItemSelection: StoryObj = {
  name: '피팅 아이템 선택 (실 사용)',
  render: () => {
    const items = [
      { emoji: '👕', name: '검정 자켓' },
      { emoji: '👕', name: '흰 티셔츠' },
      { emoji: '👖', name: '청바지' },
      { emoji: '👟', name: '스니커즈' },
      { emoji: '🧢', name: '캡 모자' },
    ];
    const [selected, setSelected] = useState<string[]>(['검정 자켓', '흰 티셔츠']);
    const toggle = (name: string) =>
      setSelected((prev) =>
        prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
      );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 480 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#211922' }}>
          피팅할 아이템 선택
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {items.map((i) => (
            <Tag
              key={i.name}
              selected={selected.includes(i.name)}
              onClick={() => toggle(i.name)}
            >
              {i.emoji} {i.name}
            </Tag>
          ))}
        </div>
      </div>
    );
  },
};
