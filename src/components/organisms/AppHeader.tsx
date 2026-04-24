'use client';

import { CSSProperties, ReactNode } from 'react';
import { color, radius, typography } from '@/tokens';
import { SearchBar } from '../molecules/SearchBar';
import { Avatar } from '../atoms/Avatar';

export interface AppHeaderProps {
  logo?: ReactNode;
  onSearch?: (value: string) => void;
  user?: { name: string; src?: string };
  actions?: ReactNode;
  style?: CSSProperties;
}

export function AppHeader({ logo, onSearch, user, actions, style }: AppHeaderProps) {
  const wrapper: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: color.bg['layer-default'],
    borderBottom: `1px solid ${color.stroke['neutral-muted']}`,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '12px 24px',
  };

  const logoBase: CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    background: color.bg['brand-solid'],
    color: color.fg['neutral-inverted'],
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.heading.md.fontSize,
    fontWeight: typography.heading.md.fontWeight,
    flexShrink: 0,
  };

  return (
    <header style={{ ...wrapper, ...style }}>
      <span style={logoBase}>{logo ?? 'M'}</span>
      <div style={{ flex: 1, maxWidth: 520 }}>
        <SearchBar placeholder="검색" onChange={(e) => onSearch?.(e.target.value)} />
      </div>
      {actions}
      {user ? <Avatar name={user.name} src={user.src} size="sm" /> : null}
    </header>
  );
}
