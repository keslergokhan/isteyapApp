import {
  AppButton,
  AppCard,
  AppHStack,
  AppLogo,
  AppText,
  AppTextInput,
  AppVStack,
} from "@/shread/components";
import LoginFormStyles from "./LoginForm.styles";
import { LoginFormData } from "./LoginForm.type";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pressable, View } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  const defaultData: LoginFormData = {
    email: "",
    password: "",
  };

  const loginSchema: Yup.ObjectSchema<LoginFormData> = Yup.object({
    email: Yup.string().required("Lütfen boş bırakmayınız"),
    password: Yup.string().required("Lütfen boş bırakmayınız"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: defaultData,
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {}

  return (
    <AppCard style={LoginFormStyles.container}>
      <AppVStack spacing={32}>
        <View style={{ alignItems: "center" }}>
          <AppLogo size="large"></AppLogo>
        </View>
        <AppVStack spacing={8}>
          <AppTextInput
            control={control}
            name="email"
            label="Email Adresi"
          ></AppTextInput>
          <AppTextInput
            control={control}
            name="password"
            label="Şifre"
            secureTextEntry={true}
          ></AppTextInput>
        </AppVStack>
        <AppButton variant="tertiary" onPress={handleSubmit(onSubmit)}>
          Giriş
        </AppButton>
        
      </AppVStack>
    </AppCard>
  );
}
