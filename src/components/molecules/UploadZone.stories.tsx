import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UploadZone } from './UploadZone';

const meta: Meta<typeof UploadZone> = {
  title: 'Molecules/UploadZone',
  component: UploadZone,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof UploadZone>;

export const Default: Story = {};

export const AnalyzePage: Story = {
  render: () => (
    <div style={{ maxWidth: 672, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#211922',
            letterSpacing: '-0.3px',
            margin: 0,
          }}
        >
          패션 아이템 인식
        </h1>
        <p style={{ marginTop: 4, fontSize: 14, color: '#62625b' }}>
          사진을 업로드하면 AI가 착용한 패션 아이템을 분석합니다.
        </p>
      </div>
      <UploadZone />
    </div>
  ),
};
