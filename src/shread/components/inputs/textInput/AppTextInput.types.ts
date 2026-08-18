import { Control, FieldPath, FieldValues } from "react-hook-form";

export default interface AppTextInputProps<T extends FieldValues>{
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    control?:Control<T>
    name?:FieldPath<T>
}