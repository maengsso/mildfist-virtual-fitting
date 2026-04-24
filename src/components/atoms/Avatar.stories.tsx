import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
  args: { name: '김민지', size: 'md' },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: 'https://placehold.co/64x64/e60023/ffffff?text=M',
  },
};

export const AllSizes: Story = {
  name: 'Sizes (실 사용 매핑)',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Kim" size="xs" />
        <p style={{ fontSize: 12, color: '#62625b', marginTop: 4 }}>xs — 홈 카드</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Kim" size={28} />
        <p style={{ fontSize: 12, color: '#62625b', marginTop: 4 }}>28 — 회원 테이블</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Kim" size="sm" />
        <p style={{ fontSize: 12, color: '#62625b', marginTop: 4 }}>sm — 헤더</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Kim" size="md" />
        <p style={{ fontSize: 12, color: '#62625b', marginTop: 4 }}>md — 상세 정보</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Kim" size="lg" />
        <p style={{ fontSize: 12, color: '#62625b', marginTop: 4 }}>lg — 프로필</p>
      </div>
    </div>
  ),
};
