const defaultVariant = ["primary", "secondary", "outline"] as const;
export type DefaultVariant = typeof defaultVariant[number];