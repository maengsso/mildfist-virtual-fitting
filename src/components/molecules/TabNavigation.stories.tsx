import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { TabNavigation, TabItem } from './TabNavigation';

const meta: Meta<typeof TabNavigation> = {
  title: 'Molecules/TabNavigation',
  component: TabNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

const items: TabItem[] = [
  { id: 'latest', label: '최신' },
  { id: 'popular', label: '인기' },
  { id: 'following', label: '팔로잉' },
];

export const Interactive: StoryObj = {
  render: () => {
    const [active, setActive] = useState('latest');
    return <TabNavigation items={items} activeId={active} onChange={setActive} />;
  },
};
