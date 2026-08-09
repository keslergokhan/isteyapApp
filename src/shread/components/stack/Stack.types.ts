import theme from "@/shread/theme";


export interface AppStackProps {
    children?: React.ReactNode;
    spacing:typeof theme.spacing[keyof typeof theme.spacing];
}