# MildFist Virtual Fitting — Design System

draft-to-storybook 스킬로 생성된 디자인 시스템입니다. 디자이너는 Storybook을 인터페이스로 삼아 토큰·컴포넌트를 조정하세요.

## 1. Stack

| 항목 | 값 |
|------|----|
| Framework | Next.js 16.2.4 (App Router) |
| UI Library | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (`@theme` directive) + inline styles + 토큰 import |
| Storybook | v10.3.5 (`@storybook/nextjs-vite`) |
| Package Manager | npm |

## 2. 기존에 있던 것

- `src/app/globals.css`에 Pinterest 기반 warm neutrals 9개 CSS 변수 (`--pinterest-red`, `--sand-gray` 등) — **유지됨**, 건드리지 않음.
- 상세한 `DESIGN.md` (Pinterest 스타일 가이드) — 이 디자인 시스템의 출발점.
- `src/components/Header.tsx`, `AuthContext.tsx` — 그대로 유지.
- Storybook, semantic 토큰 레이어, atomic 컴포넌트 구조 — **없었음 → 새로 추가**.

## 3. 토큰 두 층 구조

**Primitive** (`src/tokens/primitive.ts`): 의미 없는 순수 스케일.
- `gray.00` ~ `gray.1000` (warm-toned: `#ffffff` → `#211922` → `#000000`)
- `red.100` ~ `red.1000` (brand — Pinterest Red `#e60023`는 `red.500`)
- `green`, `blue`, `purple` 계열 — draft에서 실제로 쓰이는 색만
- `primitiveSpace` (0~13), `primitiveRadius`, `primitiveShadow`, `primitiveTypography`

**Semantic** (`src/tokens/semantic.ts`): 역할 기반. UI 코드는 이 층만 참조.

명명 규칙: `{property}.{role}-{variant}[-{state}]`

| 예시 | 의미 |
|------|------|
| `fg.neutral-solid` | 기본 본문 텍스트 (`gray.900` = `#211922`) |
| `bg.brand-solid` | 주요 CTA 배경 (`red.500` = `#e60023`) |
| `bg.brand-solid-pressed` | CTA 눌림 상태 (`red.600` = `#c10020`) |
| `stroke.neutral-muted` | 기본 구분선 (`gray.200` = `#e5e5e0`) |
| `stroke.focused` | 키보드 포커스 링 (`blue.500` = `#435ee5`) |

**규칙**: 컴포넌트 코드는 primitive를 직접 참조하지 않습니다. 필요한 시맨틱이 없으면 시맨틱 층에 추가하세요 — 프리미티브에서 바로 가져오지 마세요. (예외: Foundations 스토리는 프리미티브도 문서화 목적으로 표시)

## 4. 프리미티브 컬러 팔레트

| Family | 범위 | 비고 |
|--------|------|------|
| `gray` | 11단계 (00, 100–1000) | warm-toned (olive/sand 톤) |
| `red` | 10단계 (100–1000) | 브랜드 색, `red.500`이 Pinterest Red |
| `green` | 10단계 | 긍정/성공 |
| `blue` | 10단계 | 정보/링크/포커스 |
| `purple` | 10단계 | magic/프리미엄 (AI 기능 등) |

## 5. 시맨틱 컬러 맵 (발췌)

### `fg.*`
| 토큰 | 프리미티브 | 쓰임 |
|------|-----------|------|
| `neutral-solid` | `gray.900` | 본문 텍스트 |
| `neutral-muted` | `gray.700` | 보조 텍스트 |
| `neutral-subtle` | `gray.500` | 힌트, 비활성 |
| `neutral-inverted` | `gray.00` | 어두운 배경 위 텍스트 |
| `brand-solid` | `red.500` | 브랜드 컬러 텍스트·아이콘 |

### `bg.*`
| 토큰 | 프리미티브 | 쓰임 |
|------|-----------|------|
| `layer-default` | `gray.00` | 앱 기본 배경 |
| `layer-subtle` | `gray.100` | 섹션/카드 부드러운 배경 |
| `neutral-muted` | `gray.200` | 보조 버튼 배경 |
| `brand-solid` | `red.500` | 주요 CTA |
| `brand-weak` | `red.100` | 브랜드 연한 배경 |
| `overlay-scrim` | `rgba(0,0,0,0.4)` | 모달 배경 |

### `stroke.*`
| 토큰 | 프리미티브 | 쓰임 |
|------|-----------|------|
| `neutral-muted` | `gray.200` | 구분선, 카드 테두리 |
| `neutral-solid` | `gray.500` | 인풋 테두리 |
| `focused` | `blue.500` | 포커스 링 |

## 6. 컴포넌트 인벤토리

### Atoms
| 컴포넌트 | 변형 | 용도 |
|---------|------|------|
| `Button` | `primary` / `secondary` / `ghost` / `circular`, `sm·md·lg` | 모든 액션 |
| `Input` | `invalid` 상태 | 폼 입력 |
| `Badge` | 6 tone (neutral/brand/positive/critical/informative/magic) | 상태/태그 표시 |
| `Avatar` | `xs·sm·md·lg`, 이미지 or 이니셜 | 사용자 표현 |
| `Tag` | `selected` 상태, 클릭 가능 | 필터·카테고리 칩 |

### Molecules
| 컴포넌트 | 용도 |
|---------|------|
| `SearchBar` | 헤더·관리자 검색 |
| `InfoRow` | 라벨 + 값 나란히 (프로필·상세) |
| `TabNavigation` | 탭 + 활성 인디케이터 (`red.500` 밑줄) |
| `Card` | `flat` / `outlined` / `floating` 3 variant |
| `StatCard` | 관리자 통계 카드 |
| `UploadZone` | 드래그앤드롭 업로드 영역 (fitting·analyze 페이지) |

### Organisms
| 컴포넌트 | 용도 |
|---------|------|
| `AppHeader` | 로고 + 검색 + 유저 메뉴. 기존 `src/components/Header.tsx`는 유지 — 점진 교체용 |
| `Modal` | 모달/다이얼로그 (ESC·스크림 클릭 닫힘) |

## 7. 확장 레시피

### 시맨틱 컬러 추가
1. `src/tokens/semantic.ts`의 `color.bg` (또는 fg/stroke)에 새 키 추가
2. 프리미티브에서 매핑 (예: `'bg.warning-weak': primitive.yellow[100]`)
3. `src/styles/tokens.css`에도 대응 변수 추가 (CSS에서 쓸 거면)
4. Foundations/Color 스토리에서 자동으로 보임

### Atom에 새 variant 추가
1. 해당 컴포넌트 파일에서 `variantMap` 확장
2. `.stories.tsx`의 `argTypes.variant.options`에 추가
3. 전용 스토리 하나 추가

### 페이지 패턴 → Molecule 승격
1. 해당 패턴이 2곳 이상에서 보이거나 표준 UI primitive인지 확인
2. `src/components/molecules/` 에 파일 생성 (토큰만 참조)
3. `.stories.tsx` 추가 (최소 Default + 주요 variant 스토리)
4. 기존 inline 구현을 교체

## 8. 의도적으로 제외

- **Motion/애니메이션 토큰** — 스킬 범위 밖
- **기존 `src/components/Header.tsx` 교체** — 신규 `AppHeader`는 참고용이고, 실제 교체는 디자이너가 필요할 때 결정
- **Tailwind 클래스 리팩토링** — draft는 inline style 중심. 토큰 기반으로 서서히 마이그레이션 권장, 한 번에 전수 교체는 보류
- **Yellow/warning 계열** — draft에 실사용 없어 보류. 필요할 때 추가
- **다크 모드** — 현재 단일 테마. 필요 시 `@theme` CSS 변수로 `prefers-color-scheme` 분기 추가

## 9. 디자이너 워크플로

1. `npm run storybook` 으로 Storybook 실행 (`http://localhost:6006`)
2. Foundations 섹션에서 현재 토큰 상태 확인 (Color / Typography / Spacing / Radius·Shadow)
3. Atoms → Molecules → Organisms 순으로 컴포넌트 훑어보기
4. 수정하고 싶은 곳이 있으면 Claude Code에게 자연어로 요청 — 예: "Button primary 색을 더 진하게", "Badge positive 배경 더 연하게"
5. Storybook에서 바로 HMR로 반영됨. 실제 페이지 영향은 토큰 수정 시 자동 전파
