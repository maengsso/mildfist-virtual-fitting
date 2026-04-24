import {
  primitive,
  primitiveSpace,
  primitiveRadius,
  primitiveShadow,
  primitiveTypography,
} from './primitive';

export const color = {
  fg: {
    'neutral-solid': primitive.gray[900],
    'neutral-muted': primitive.gray[700],
    'neutral-subtle': primitive.gray[500],
    'neutral-inverted': primitive.gray['00'],
    'brand-solid': primitive.red[500],
    'critical-solid': primitive.red[700],
    'positive-solid': primitive.green[600],
    'informative-solid': primitive.blue[600],
    'magic-solid': primitive.purple[500],
  },
  bg: {
    'layer-default': primitive.gray['00'],
    'layer-floating': primitive.gray['00'],
    'layer-subtle': primitive.gray[100],
    'neutral-solid': primitive.gray[900],
    'neutral-muted': primitive.gray[200],
    'neutral-weak': primitive.gray[100],
    'brand-solid': primitive.red[500],
    'brand-solid-pressed': primitive.red[600],
    'brand-weak': primitive.red[100],
    'positive-weak': primitive.green[100],
    'critical-weak': primitive.red[100],
    'informative-weak': primitive.blue[100],
    'magic-weak': primitive.purple[100],
    'overlay-scrim': 'rgba(0,0,0,0.4)',
  },
  stroke: {
    'neutral-subtle': primitive.gray[300],
    'neutral-muted': primitive.gray[200],
    'neutral-solid': primitive.gray[500],
    'brand-solid': primitive.red[500],
    focused: primitive.blue[500],
  },
} as const;

export const space = {
  component: {
    xs: primitiveSpace[1],
    sm: primitiveSpace[3],
    md: primitiveSpace[4],
    lg: primitiveSpace[6],
    xl: primitiveSpace[8],
  },
  layout: {
    sm: primitiveSpace[6],
    md: primitiveSpace[9],
    lg: primitiveSpace[12],
    xl: primitiveSpace[13],
  },
} as const;

export const radius = {
  tab: primitiveRadius.xs,
  chip: primitiveRadius.lg,
  control: primitiveRadius.xl,
  card: primitiveRadius.xl,
  modal: primitiveRadius['2xl'],
  pill: primitiveRadius.full,
} as const;

export const shadow = {
  card: primitiveShadow.none,
  popover: primitiveShadow.md,
  modal: primitiveShadow.lg,
} as const;

const t = primitiveTypography;
type TypeStyle = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
};

export const typography: Record<string, Record<string, TypeStyle>> = {
  display: {
    lg: {
      fontSize: t.fontSize['3xl'],
      fontWeight: t.fontWeight.semibold,
      lineHeight: t.lineHeight.tight,
      letterSpacing: t.letterSpacing.tight,
    },
  },
  heading: {
    xl: {
      fontSize: t.fontSize.xl,
      fontWeight: t.fontWeight.semibold,
      lineHeight: t.lineHeight.tight,
    },
    lg: {
      fontSize: t.fontSize.lg,
      fontWeight: t.fontWeight.semibold,
      lineHeight: t.lineHeight.tight,
    },
    md: {
      fontSize: t.fontSize.md,
      fontWeight: t.fontWeight.semibold,
      lineHeight: t.lineHeight.normal,
    },
    sm: {
      fontSize: t.fontSize.sm,
      fontWeight: t.fontWeight.semibold,
      lineHeight: t.lineHeight.normal,
    },
  },
  body: {
    lg: {
      fontSize: t.fontSize.md,
      fontWeight: t.fontWeight.regular,
      lineHeight: t.lineHeight.relaxed,
    },
    md: {
      fontSize: t.fontSize.sm,
      fontWeight: t.fontWeight.regular,
      lineHeight: t.lineHeight.normal,
    },
    sm: {
      fontSize: t.fontSize.xs,
      fontWeight: t.fontWeight.regular,
      lineHeight: t.lineHeight.normal,
    },
  },
  label: {
    md: {
      fontSize: t.fontSize.sm,
      fontWeight: t.fontWeight.medium,
      lineHeight: t.lineHeight.normal,
    },
    sm: {
      fontSize: t.fontSize.xs,
      fontWeight: t.fontWeight.medium,
      lineHeight: t.lineHeight.normal,
    },
  },
};

export const fontFamily = primitiveTypography.fontFamily;
