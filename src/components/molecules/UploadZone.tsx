'use client';

import { CSSProperties, ReactNode, useState, DragEvent } from 'react';
import { color, radius, typography } from '@/tokens';

export interface UploadZoneProps {
  onFiles?: (files: File[]) => void;
  label?: ReactNode;
  hint?: ReactNode;
  minHeight?: number;
  style?: CSSProperties;
}

export function UploadZone({
  onFiles,
  label = '이미지를 드래그하거나 클릭하여 업로드',
  hint = 'JPG, PNG, WEBP (최대 10MB)',
  minHeight = 220,
  style,
}: UploadZoneProps) {
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
    padding: 32,
    minHeight,
    background: isDragging ? color.bg['brand-weak'] : color.bg['layer-subtle'],
    border: `2px dashed ${isDragging ? color.stroke['brand-solid'] : color.stroke['neutral-solid']}`,
    borderRadius: radius.modal,
    cursor: 'pointer',
    transition: 'border-color 200ms ease, background-color 200ms ease',
    textAlign: 'center',
  };

  const iconColor = isDragging ? color.fg['brand-solid'] : color.fg['neutral-subtle'];

  const labelStyle: CSSProperties = {
    marginTop: 12,
    fontSize: typography.body.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    lineHeight: typography.label.md.lineHeight,
    color: color.fg['neutral-solid'],
  };

  const hintStyle: CSSProperties = {
    marginTop: 4,
    fontSize: typography.body.sm.fontSize,
    color: color.fg['neutral-subtle'],
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
        accept="image/*"
        hidden
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length > 0) onFiles?.(files);
        }}
      />
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span style={labelStyle}>{label}</span>
      {hint ? <span style={hintStyle}>{hint}</span> : null}
    </label>
  );
}
