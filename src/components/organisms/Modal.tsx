'use client';

import { CSSProperties, ReactNode, useEffect } from 'react';
import { color, radius, shadow, typography } from '@/tokens';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  width?: number;
}

export function Modal({ open, onClose, title, children, footer, width = 480 }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const scrim: CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: color.bg['overlay-scrim'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 1000,
  };

  const dialog: CSSProperties = {
    background: color.bg['layer-floating'],
    borderRadius: radius.modal,
    boxShadow: shadow.modal,
    width: '100%',
    maxWidth: width,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  };

  const titleStyle: CSSProperties = {
    fontSize: typography.heading.md.fontSize,
    fontWeight: typography.heading.md.fontWeight,
    lineHeight: typography.heading.md.lineHeight,
    color: color.fg['neutral-solid'],
    margin: 0,
  };

  return (
    <div style={scrim} onClick={onClose}>
      <div
        style={dialog}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {title ? <h3 style={titleStyle}>{title}</h3> : null}
        <div>{children}</div>
        {footer ? (
          <div style={{ display: 'flex', gap: 12 }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
