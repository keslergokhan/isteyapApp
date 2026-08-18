import {
  AppButton,
  AppCard,
  AppLogo,
  AppTextInput,
  AppVStack,
} from "@/shread/components";
import LoginFormStyles from "./LoginForm.styles";
import { LoginFormData } from "./LoginForm.type";
import { useForm } from "react-hook-form";
import { View } from "react-native";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AppCard style={LoginFormStyles.container}>
      <AppVStack spacing={32}>
        <View style={{ alignItems: "center" }}>
          <AppLogo size="large"></AppLogo>
        </View>
        <AppVStack spacing={8}>
          <AppTextInput label="Bu bir deneme"></AppTextInput>
          <AppTextInput label="Bu bir deneme"></AppTextInput>
          <AppTextInput label="Bu bir deneme"></AppTextInput>
        </AppVStack>
        <AppButton variant="tertiary">Kayıt Ol</AppButton>
      </AppVStack>
    </AppCard>
  );
}
