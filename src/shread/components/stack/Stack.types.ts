import theme from "@/shread/theme";


export interface AppStackProps {
    cheldren?: React.ReactNode;
    spacing:typeof theme.spacing[keyof typeof theme.spacing];
}