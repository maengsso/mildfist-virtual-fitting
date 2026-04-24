import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Molecules/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const LoginSignup: StoryObj = {
  name: '로그인/회원가입 토글 (실 사용)',
  render: () => {
    const [active, setActive] = useState('login');
    return (
      <div style={{ maxWidth: 360 }}>
        <SegmentedControl
          items={[
            { id: 'login', label: '로그인' },
            { id: 'signup', label: '회원가입' },
          ]}
          activeId={active}
          onChange={setActive}
        />
      </div>
    );
  },
};
