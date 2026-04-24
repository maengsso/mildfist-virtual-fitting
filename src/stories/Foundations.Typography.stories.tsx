import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { typography } from '@/tokens';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
};

export default meta;

function Sample({ name, style }: { name: string; style: React.CSSProperties }) {
  return (
    <div style={{ padding: '16px 0', borderBottom: '1px solid #e5e5e0' }}>
      <div style={{ fontSize: 12, color: '#62625b', fontFamily: 'ui-monospace, monospace' }}>
        {name} — {style.fontSize} / {String(style.fontWeight)} / lh {String(style.lineHeight)}
      </div>
      <div style={{ ...style, color: '#211922', marginTop: 4 }}>
        디자인 시스템은 언어입니다 — 빠르게 말하고, 명확하게 듣습니다.
      </div>
    </div>
  );
}

export const AllScales: StoryObj = {
  render: () => (
    <div>
      {Object.entries(typography).map(([group, sizes]) => (
        <section key={group} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#211922', marginBottom: 8 }}>
            {group}
          </h3>
          {Object.entries(sizes).map(([step, style]) => (
            <Sample key={step} name={`${group}.${step}`} style={style} />
          ))}
        </section>
      ))}
    </div>
  ),
};
