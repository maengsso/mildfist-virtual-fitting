import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AppHeader } from './AppHeader';

const meta: Meta<typeof AppHeader> = {
  title: 'Organisms/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

const SmallIcon = ({ path }: { path: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const menuItems = [
  { key: 'mypage', label: '마이페이지', icon: <SmallIcon path="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /> },
  { key: 'analyze', label: '아이템 인식', icon: <SmallIcon path="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /> },
  { key: 'fitting', label: '가상 피팅', icon: <SmallIcon path="M6 3v12 M18 9a3 3 0 0 1-3 3H6" /> },
  { key: 'admin', label: '관리자', icon: <SmallIcon path="M3 3h7v7h-7z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7h-7z" /> },
  { key: 'logout', label: '로그아웃', destructive: true, icon: <SmallIcon path="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" /> },
];

export const LoggedIn: StoryObj = {
  args: { user: { name: '민지' }, userMenuItems: menuItems, searchReadOnly: true },
};

export const LoggedOut: StoryObj = { args: { searchReadOnly: true } };
