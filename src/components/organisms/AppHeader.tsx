'use client';

import { CSSProperties } from 'react';
import { color, radius, typography } from '@/tokens';
import { SearchBar } from '../molecules/SearchBar';
import { UserMenu, UserMenuItem } from '../molecules/UserMenu';
import { Button } from '../atoms/Button';

export interface AppHeaderProps {
  brand?: string;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  searchReadOnly?: boolean;
  user?: { name: string; src?: string };
  userMenuItems?: UserMenuItem[];
  onLogin?: () => void;
  style?: CSSProperties;
}

export function AppHeader({
  brand = 'MildFist',
  searchPlaceholder = '스타일 검색...',
  onSearch,
  searchReadOnly,
  user,
  userMenuItems = [],
  onLogin,
  style,
}: AppHeaderProps) {
  const wrapper: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: color.bg['layer-default'],
    borderBottom: `1px solid ${color.stroke['neutral-muted']}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
  };

  const logoMark: CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    background: color.bg['brand-solid'],
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const wordmark: CSSProperties = {
    fontSize: typography.heading.lg.fontSize,
    fontWeight: typography.heading.lg.fontWeight,
    lineHeight: typography.heading.lg.lineHeight,
    letterSpacing: '-0.3px',
    color: color.fg['neutral-solid'],
  };

  return (
    <header style={{ ...wrapper, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={logoMark}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 3v12" />
            <path d="M18 9a3 3 0 0 1-3 3H6" />
            <path d="m10 8 -4 4 4 4" />
          </svg>
        </div>
        <span style={wordmark}>{brand}</span>
      </div>

      <div style={{ flex: 1, maxWidth: 384, margin: '0 16px' }}>
        <SearchBar
          placeholder={searchPlaceholder}
          readOnly={searchReadOnly}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        {user ? (
          <UserMenu userName={user.name} userImage={user.src} items={userMenuItems} />
        ) : (
          <Button size="md" onClick={onLogin}>
            로그인
          </Button>
        )}
      </div>
    </header>
  );
}
