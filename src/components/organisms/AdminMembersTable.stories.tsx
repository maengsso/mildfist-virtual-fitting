import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { AdminMembersTable, AdminMember, MemberDetail } from './AdminMembersTable';

const meta: Meta<typeof AdminMembersTable> = {
  title: 'Organisms/AdminMembersTable',
  component: AdminMembersTable,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

const members: AdminMember[] = [
  { id: 1, name: '스타일리스트 민지', email: 'demo@mildfist.com', credits: 50, is_active: 1, is_admin: 1, style_count: 3, created_at: '2026-04-24' },
  { id: 2, name: '패션러버 서준', email: 'fashion@mildfist.com', credits: 30, is_active: 1, is_admin: 0, style_count: 2, created_at: '2026-04-24' },
  { id: 3, name: '코디왕 하은', email: 'test@mildfist.com', credits: 100, is_active: 1, is_admin: 0, style_count: 1, created_at: '2026-04-24' },
  { id: 4, name: '김지우', email: 'jiwoo.kim@litmers.com', credits: 12, is_active: 1, is_admin: 0, style_count: 0, created_at: '2026-04-23' },
  { id: 5, name: '이도현', email: 'dohyun.lee@litmers.com', credits: 240, is_active: 1, is_admin: 0, style_count: 4, created_at: '2026-04-22' },
  { id: 6, name: '박서아', email: 'seoa.park@litmers.com', credits: 0, is_active: 1, is_admin: 0, style_count: 1, created_at: '2026-04-20' },
  { id: 7, name: '최유진', email: 'yoojin.choi@litmers.com', credits: 87, is_active: 1, is_admin: 0, style_count: 2, created_at: '2026-04-18' },
  { id: 8, name: '정하늘', email: 'haneul.jung@litmers.com', credits: 2, is_active: 0, is_admin: 0, style_count: 0, created_at: '2026-04-15' },
];

const dummyDetail: MemberDetail = {
  styles: [
    { id: 1, image_url: 'https://placehold.co/120x120/e8d5c4/211922?text=1', likes_count: 24, is_hidden: 0 },
    { id: 2, image_url: 'https://placehold.co/120x120/c4d4e8/211922?text=2', likes_count: 18, is_hidden: 0 },
    { id: 3, image_url: 'https://placehold.co/120x120/d4e8c4/211922?text=3', likes_count: 31, is_hidden: 0 },
  ],
  creditHistory: [
    { id: 1, amount: 30, description: '30크레딧 충전' },
    { id: 2, amount: -1, description: '가상 피팅' },
    { id: 3, amount: -1, description: '가상 피팅' },
  ],
};

export const AdminMembersPage: StoryObj = {
  name: '회원 관리 페이지 전체 (실 사용)',
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <AdminMembersTable
        members={members}
        page={page}
        totalPages={3}
        onPageChange={setPage}
        onToggleActive={() => {}}
        fetchDetail={async () => dummyDetail}
      />
    );
  },
};
