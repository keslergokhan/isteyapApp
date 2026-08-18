import { View, Text, ImageBackground } from "react-native";
import LoginForm from "../components/loginForm/LoginForm";

export default function LoginScreen() {
  const loginBackground = require("@/assets/images/login-background.png");
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={loginBackground}
      resizeMode="cover"
    >
      <LoginForm></LoginForm>
    </ImageBackground>
  );
}
