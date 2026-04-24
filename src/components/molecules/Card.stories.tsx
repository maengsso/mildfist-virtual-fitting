import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['flat', 'outlined', 'floating'] },
    radiusOverride: { control: 'select', options: ['card', 'modal'] },
  },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Flat: Story = {
  name: 'Flat (마이페이지 피팅 히스토리)',
  args: { variant: 'flat', children: '부드러운 회색 바탕 — 피팅 기록이나 거래 내역 같은 리스트 아이템' },
};

export const Outlined: Story = {
  name: 'Outlined (admin stat card)',
  args: { variant: 'outlined', padding: 20, children: '흰 바탕 + 1px 경계선 — 관리자 카드' },
};

export const Floating: Story = {
  name: 'Floating (드롭다운·모달)',
  args: { variant: 'floating', children: '그림자 있는 카드' },
};

export const CreditsBalanceUsage: Story = {
  name: '실 사용 — 마이페이지 크레딧 잔액',
  render: () => (
    <Card variant="flat" radiusOverride="modal" padding={24} style={{ maxWidth: 480 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 12, color: '#62625b', margin: 0 }}>보유 크레딧</p>
          <p
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginTop: 4,
              color: '#211922',
              margin: 0,
            }}
          >
            30 <span style={{ fontSize: 14, fontWeight: 400, color: '#62625b' }}>크레딧</span>
          </p>
        </div>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e60023" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    </Card>
  ),
};
