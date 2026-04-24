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

const homeTabs: TabItem[] = [
  { id: 'latest', label: '최신순' },
  { id: 'popular', label: '인기순' },
];

const mypageTabs: TabItem[] = [
  { id: 'styles', label: '내 스타일' },
  { id: 'fittings', label: '피팅 히스토리' },
  { id: 'credits', label: '크레딧' },
];

export const HomeSortTabs: StoryObj = {
  name: 'Home Sort (gap 16)',
  render: () => {
    const [active, setActive] = useState('latest');
    return <TabNavigation items={homeTabs} activeId={active} onChange={setActive} gap={16} />;
  },
};

export const MyPageTabs: StoryObj = {
  name: 'MyPage (gap 24)',
  render: () => {
    const [active, setActive] = useState('styles');
    return <TabNavigation items={mypageTabs} activeId={active} onChange={setActive} gap={24} />;
  },
};
