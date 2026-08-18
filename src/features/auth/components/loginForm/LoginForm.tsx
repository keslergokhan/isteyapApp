import {
  AppButton,
  AppCard,
  AppLogo,
  AppTextInput,
  AppVStack,
} from "@/shread/components";
import LoginFormStyles from "./LoginForm.styles";
import { LoginFormData } from "./LoginForm.type";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  
  const defaultData:LoginFormData = {
    email: "",
    firstName: "",
    lastName: "",
  }

  
  const loginSchema:Yup.ObjectSchema<LoginFormData> = Yup.object({
    email: Yup.string().required("Lütfen boş bırakmayınız"),
    firstName: Yup.string().required("Lütfen boş bırakmayınız"),
    lastName: Yup.string().required("Lütfen boş bırakmayınız"),
  }); 
  
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({defaultValues:defaultData,resolver:yupResolver(loginSchema)});

  async function onSubmit(data:LoginFormData){
    alert(`${data.email} - ${data.firstName} ${data.lastName}`);
  }



  return (
    <AppCard style={LoginFormStyles.container}>
      <AppVStack spacing={32}>
        <View style={{ alignItems: "center" }}>
          <AppLogo size="large"></AppLogo>
        </View>
        <AppVStack spacing={8}>
          <AppTextInput control={control} name="email" label="Email Adresi"></AppTextInput>
          <AppTextInput control={control} name="firstName" label="Ad"></AppTextInput>
          <AppTextInput control={control} name="lastName" label="Soyad"></AppTextInput>
        </AppVStack>
        <AppButton variant="tertiary" onPress={handleSubmit(onSubmit)}>Kayıt Ol</AppButton>
      </AppVStack>
    </AppCard>
  );
}
