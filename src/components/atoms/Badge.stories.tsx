import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'brand', 'positive', 'informative', 'magic'],
    },
    variant: {
      control: 'select',
      options: ['tinted', 'overlay'],
    },
  },
  args: { children: '배지' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const AdminActivityExact: Story = {
  name: 'Admin Activity (실제 사용처)',
  render: () => (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e5e5e0',
        borderRadius: 16,
        overflow: 'hidden',
        maxWidth: 640,
      }}
    >
      {[
        { tone: 'positive' as const, label: '가입', user: '이도윤', detail: '새 회원 가입' },
        { tone: 'magic' as const, label: '스타일', user: '김민지', detail: '스타일 업로드' },
        { tone: 'informative' as const, label: '피팅', user: '박서준', detail: '가상 피팅 완료' },
        { tone: 'brand' as const, label: '충전', user: '최하늘', detail: '30 크레딧 충전' },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 20px',
            borderTop: i === 0 ? 'none' : '1px solid #e5e5e0',
          }}
        >
          <Badge tone={row.tone}>{row.label}</Badge>
          <span style={{ fontSize: 14, color: '#211922', flex: 1 }}>
            <strong>{row.user}</strong>
            <span style={{ color: '#62625b' }}> · {row.detail}</span>
          </span>
          <span style={{ fontSize: 12, color: '#91918c' }}>방금 전</span>
        </div>
      ))}
    </div>
  ),
};

export const MasonryOverlay: Story = {
  name: 'Masonry Overlay (홈 피드 hover)',
  render: () => (
    <div
      style={{
        width: 240,
        height: 260,
        borderRadius: 16,
        background: 'linear-gradient(160deg, #f6d8c1 0%, #c78a6b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: 12,
          display: 'flex',
          alignItems: 'flex-end',
          background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5))',
        }}
      >
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Badge variant="overlay">검정 자켓</Badge>
          <Badge variant="overlay">흰 티셔츠</Badge>
          <Badge variant="overlay">청바지</Badge>
        </div>
      </div>
    </div>
  ),
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="neutral">기본</Badge>
      <Badge tone="brand">브랜드</Badge>
      <Badge tone="positive">성공</Badge>
      <Badge tone="informative">정보</Badge>
      <Badge tone="magic">프리미엄</Badge>
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge color="#103c25">가입</Badge>
      <Badge color="#6845ab">스타일</Badge>
      <Badge color="#2b48d4">피팅</Badge>
      <Badge color="#e60023">충전</Badge>
    </div>
  ),
};
