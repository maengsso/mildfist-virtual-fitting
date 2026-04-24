import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { SidebarNav, SidebarNavItem } from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
  title: 'Organisms/SidebarNav',
  component: SidebarNav,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;

const icon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const items: SidebarNavItem[] = [
  { key: 'dashboard', label: '대시보드', icon },
  { key: 'members', label: '회원 관리', icon },
  { key: 'contents', label: '콘텐츠 관리', icon },
  { key: 'credits', label: '크레딧 관리', icon },
  { key: 'payments', label: '결제 관리', icon },
];

export const AdminSidebar: StoryObj = {
  name: '관리자 패널 (실 사용)',
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <div style={{ display: 'flex', height: 600, background: '#ffffff' }}>
        <SidebarNav items={items} activeKey={active} onChange={setActive} />
        <div style={{ flex: 1, padding: 32 }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: '#211922' }}>
            {items.find((i) => i.key === active)?.label}
          </h1>
        </div>
      </div>
    );
  },
};
