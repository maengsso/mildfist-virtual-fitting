import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'circular'],
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    tone: { control: 'select', options: ['brand', 'positive', 'critical', 'neutral'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: { children: '버튼', variant: 'primary', size: 'lg' },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const OutlineBrand: Story = { args: { variant: 'outline', tone: 'brand', size: 'xs', children: '비활성화' } };
export const OutlinePositive: Story = { args: { variant: 'outline', tone: 'positive', size: 'xs', children: '활성화' } };
export const Circular: Story = { args: { variant: 'circular', children: '+' } };

export const Sizes: Story = {
  name: 'Sizes (실 사용 매핑)',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">xs — admin outline·페이지네이션 (8r / 4·12 / 400)</Button>
      <Button size="sm">sm — 회원탈퇴 (12r / 6·14 / 500)</Button>
      <Button size="md">md — 좋아요·피팅 (16r / 8·20 / 500)</Button>
      <Button size="lg">lg — 로그인·피팅시작 (16r / 12·20 / 500)</Button>
      <Button size="xl">xl — 홈 FAB (20r / 12·24 / 500)</Button>
    </div>
  ),
};

export const Disabled: Story = { args: { disabled: true } };

export const AdminActionButtons: Story = {
  name: 'Admin 아웃라인 (실 사용 — xs)',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="outline" tone="brand" size="xs">
        비활성화
      </Button>
      <Button variant="outline" tone="positive" size="xs">
        활성화
      </Button>
      <Button variant="outline" tone="brand" size="xs">
        숨김
      </Button>
      <Button variant="outline" tone="neutral" size="xs">
        삭제
      </Button>
      <Button variant="secondary" size="xs">
        무시
      </Button>
    </div>
  ),
};

export const LoginFormUsage: Story = {
  name: 'Login 폼 (실 화면)',
  render: () => (
    <div
      style={{
        maxWidth: 360,
        padding: 24,
        background: '#ffffff',
        border: '1px solid #e5e5e0',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <input
        placeholder="이메일"
        readOnly
        style={{
          padding: '10px 16px',
          border: '1px solid #91918c',
          borderRadius: 16,
          fontSize: 14,
        }}
      />
      <input
        placeholder="비밀번호"
        readOnly
        style={{
          padding: '10px 16px',
          border: '1px solid #91918c',
          borderRadius: 16,
          fontSize: 14,
        }}
      />
      <Button size="lg" fullWidth>
        로그인
      </Button>
    </div>
  ),
};

export const ModalFooterUsage: Story = {
  name: 'Modal Footer (실 신고 모달)',
  render: () => (
    <div style={{ display: 'flex', gap: 12, maxWidth: 360 }}>
      <Button variant="secondary" size="lg" fullWidth>
        취소
      </Button>
      <Button size="lg" fullWidth>
        신고하기
      </Button>
    </div>
  ),
};

export const FloatingActionUsage: Story = {
  name: 'FAB (홈 플로팅 업로드)',
  render: () => (
    <div
      style={{
        position: 'relative',
        width: 360,
        height: 200,
        background: '#f6f6f3',
        borderRadius: 16,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          borderRadius: 20,
        }}
      >
        <Button size="xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          스타일 올리기
        </Button>
      </div>
    </div>
  ),
};
