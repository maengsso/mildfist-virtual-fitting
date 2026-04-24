import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { primitiveSpace, space } from '@/tokens';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'padded' },
};

export default meta;

function Ruler({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '6px 0' }}>
      <div
        style={{
          width: 120,
          fontSize: 13,
          fontFamily: 'ui-monospace, monospace',
          color: '#211922',
        }}
      >
        {name}
      </div>
      <div style={{ width: 60, fontSize: 13, color: '#62625b' }}>{value}</div>
      <div
        style={{
          height: 16,
          width: value,
          background: '#e60023',
          borderRadius: 2,
        }}
      />
    </div>
  );
}

export const Primitive: StoryObj = {
  render: () => (
    <div>
      {Object.entries(primitiveSpace).map(([step, value]) => (
        <Ruler key={step} name={`space.${step}`} value={value} />
      ))}
    </div>
  ),
};

export const Semantic: StoryObj = {
  render: () => (
    <div>
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#211922' }}>
        component (내부 간격)
      </h3>
      {Object.entries(space.component).map(([step, value]) => (
        <Ruler key={step} name={`space.component.${step}`} value={value} />
      ))}
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px', color: '#211922' }}>
        layout (섹션 간격)
      </h3>
      {Object.entries(space.layout).map(([step, value]) => (
        <Ruler key={step} name={`space.layout.${step}`} value={value} />
      ))}
    </div>
  ),
};
