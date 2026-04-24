import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { color, primitive } from '@/tokens';

const meta: Meta = {
  title: 'Foundations/Color',
  parameters: { layout: 'padded' },
};

export default meta;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: value,
          border: '1px solid rgba(0,0,0,0.06)',
          flexShrink: 0,
        }}
      />
      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ color: '#62625b' }}>{value}</div>
      </div>
    </div>
  );
}

function Section({ title, entries }: { title: string; entries: [string, string][] }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#211922' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 8 }}>
        {entries.map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </div>
    </section>
  );
}

export const SemanticForeground: StoryObj = {
  render: () => (
    <Section
      title="Foreground (fg.*)"
      entries={Object.entries(color.fg).map(([k, v]) => [`fg.${k}`, v])}
    />
  ),
};

export const SemanticBackground: StoryObj = {
  render: () => (
    <Section
      title="Background (bg.*)"
      entries={Object.entries(color.bg).map(([k, v]) => [`bg.${k}`, v])}
    />
  ),
};

export const SemanticStroke: StoryObj = {
  render: () => (
    <Section
      title="Stroke (stroke.*)"
      entries={Object.entries(color.stroke).map(([k, v]) => [`stroke.${k}`, v])}
    />
  ),
};

export const PrimitivePalette: StoryObj = {
  render: () => (
    <div>
      {(Object.keys(primitive) as (keyof typeof primitive)[]).map((family) => (
        <Section
          key={family}
          title={family}
          entries={Object.entries(primitive[family]).map(([step, value]) => [
            `${family}.${step}`,
            value,
          ])}
        />
      ))}
    </div>
  ),
};
