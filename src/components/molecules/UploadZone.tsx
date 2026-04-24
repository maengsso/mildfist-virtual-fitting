'use client';

import { CSSProperties, ReactNode, useState, DragEvent } from 'react';
import { color, radius, typography } from '@/tokens';

export interface UploadZoneProps {
  onFiles?: (files: File[]) => void;
  label?: ReactNode;
  hint?: ReactNode;
  style?: CSSProperties;
}

export function UploadZone({ onFiles, label = '파일을 드래그하거나 클릭하여 업로드', hint, style }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) onFiles?.(files);
  }

  const base: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '40px 24px',
    background: isDragging ? color.bg['brand-weak'] : color.bg['layer-subtle'],
    border: `2px dashed ${isDragging ? color.stroke['brand-solid'] : color.stroke['neutral-subtle']}`,
    borderRadius: radius.modal,
    cursor: 'pointer',
    transition: 'all 120ms ease',
    textAlign: 'center',
  };

  const labelStyle: CSSProperties = {
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    color: color.fg['neutral-solid'],
  };

  const hintStyle: CSSProperties = {
    fontSize: typography.body.sm.fontSize,
    color: color.fg['neutral-muted'],
  };

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      style={{ ...base, ...style }}
    >
      <input
        type="file"
        multiple
        hidden
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length > 0) onFiles?.(files);
        }}
      />
      <span style={labelStyle}>{label}</span>
      {hint ? <span style={hintStyle}>{hint}</span> : null}
    </label>
  );
}
