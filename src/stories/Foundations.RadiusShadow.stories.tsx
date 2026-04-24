import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { primitiveRadius, primitiveShadow, radius, shadow } from '@/tokens';

const meta: Meta = {
  title: 'Foundations/RadiusShadow',
  parameters: { layout: 'padded' },
};

export default meta;

function Box({ label, style }: { label: string; style: React.CSSProperties }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          width: 120,
          height: 80,
          background: '#ffffff',
          border: '1px solid #e5e5e0',
          ...style,
        }}
      />
      <span style={{ fontSize: 12, color: '#62625b', fontFamily: 'ui-monospace, monospace' }}>
        {label}
      </span>
    </div>
  );
}

export const Radius: StoryObj = {
  render: () => (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Primitive</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        {Object.entries(primitiveRadius).map(([name, value]) => (
          <Box key={name} label={`${name} (${value})`} style={{ borderRadius: value }} />
        ))}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Semantic</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {Object.entries(radius).map(([name, value]) => (
          <Box key={name} label={`radius.${name} (${value})`} style={{ borderRadius: value }} />
        ))}
      </div>
    </div>
  ),
};

export const Shadow: StoryObj = {
  render: () => (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Primitive</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
        {Object.entries(primitiveShadow).map(([name, value]) => (
          <Box
            key={name}
            label={name}
            style={{ boxShadow: value, border: 'none', borderRadius: 12 }}
          />
        ))}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Semantic</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {Object.entries(shadow).map(([name, value]) => (
          <Box
            key={name}
            label={`shadow.${name}`}
            style={{ boxShadow: value, border: 'none', borderRadius: 12 }}
          />
        ))}
      </div>
    </div>
  ),
};
