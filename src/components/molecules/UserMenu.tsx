'use client';

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { color, radius, shadow, typography } from '@/tokens';
import { Avatar } from '../atoms/Avatar';

export interface UserMenuItem {
  key: string;
  label: string;
  icon?: ReactNode;
  destructive?: boolean;
  onSelect?: () => void;
}

export interface UserMenuProps {
  userName: string;
  userImage?: string;
  items: UserMenuItem[];
  style?: CSSProperties;
}

export function UserMenu({ userName, userImage, items, style }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const trigger: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  const nameStyle: CSSProperties = {
    fontSize: typography.label.md.fontSize,
    fontWeight: typography.label.md.fontWeight,
    color: color.fg['neutral-solid'],
  };

  const panel: CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 'calc(100% + 8px)',
    background: color.bg['layer-floating'],
    borderRadius: radius.card,
    border: `1px solid ${color.stroke['neutral-muted']}`,
    boxShadow: shadow.popover,
    minWidth: 180,
    padding: '8px 0',
    zIndex: 100,
  };

  const item = (destructive?: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    padding: '10px 16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: typography.label.md.fontSize,
    color: destructive ? color.fg['brand-solid'] : color.fg['neutral-solid'],
    textAlign: 'left',
    textDecoration: 'none',
  });

  return (
    <div ref={ref} style={{ position: 'relative', ...style }}>
      <button type="button" onClick={() => setOpen((v) => !v)} style={trigger}>
        <Avatar name={userName} src={userImage} size="sm" />
        <span style={nameStyle}>{userName}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color.fg['neutral-subtle']}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open ? (
        <div style={panel} role="menu">
          {items.map((it, i) => {
            const withDivider = it.destructive && i > 0 && !items[i - 1].destructive;
            return (
              <div key={it.key}>
                {withDivider ? (
                  <div
                    style={{
                      borderTop: `1px solid ${color.stroke['neutral-muted']}`,
                      margin: '4px 0',
                    }}
                  />
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    it.onSelect?.();
                  }}
                  style={item(it.destructive)}
                  onMouseEnter={(e) => (e.currentTarget.style.background = color.bg['layer-subtle'])}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {it.icon}
                  {it.label}
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
