import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'filled'] },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { placeholder: '이메일을 입력하세요' },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outlined: Story = { name: 'Outlined (로그인 폼)', args: { variant: 'outlined' } };
export const Filled: Story = { name: 'Filled (admin 폼)', args: { variant: 'filled' } };
export const Invalid: Story = { args: { invalid: true, defaultValue: '잘못된 값' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: '수정 불가' } };

export const LoginFormFields: StoryObj = {
  name: '로그인 폼 필드 (실 사용)',
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 360 }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#211922' }}>이름</span>
        <Input placeholder="홍길동" />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#211922' }}>이메일</span>
        <Input type="email" placeholder="example@mildfist.com" />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#211922' }}>비밀번호</span>
        <Input type="password" placeholder="••••••••" />
      </label>
    </form>
  ),
};

export const AdminCreditForm: StoryObj = {
  name: 'Admin 크레딧 폼 (실 사용 — filled)',
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#62625b' }}>
          수량 (양수: 지급, 음수: 회수)
        </span>
        <Input variant="filled" type="number" placeholder="예: 50 또는 -20" />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: '#62625b' }}>사유</span>
        <Input variant="filled" placeholder="예: 이벤트 보상, 오류 보정 등" />
      </label>
    </form>
  ),
};
