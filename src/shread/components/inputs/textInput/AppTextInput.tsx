import { View, Text, TextInput } from "react-native";
import styles from "./AppTextInput.styles";
import AppTextInputProps from "./AppTextInput.types";
import { useState } from "react";
import theme from "@/shread/theme";

export default function AppTextInput(props: AppTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  

  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput style={styles.input}
        placeholderTextColor={theme.color.text.secondary}
        onFocus={(e) => {
            setIsFocused(true);
        }}
      ></TextInput>
      {<Text style={styles.errorText}>sdfsdfsd</Text>}
    </View>
  );
}
