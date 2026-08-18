import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./AppTextInput.styles";
import AppTextInputProps from "./AppTextInput.types";
import { useState } from "react";
import theme from "@/shread/theme";
import { Controller, FieldValues } from "react-hook-form";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AppTextInput<T extends FieldValues>(
  props: AppTextInputProps<T>
) {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry,setsecureTextEntry] = useState(props.secureTextEntry)

  if (props.control && props.name) {
    return (
      <View style={props.stlye ? props.stlye : styles.container}>
        <Controller
          control={props.control}
          name={props.name}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View style={styles.inputContainer}>
              {props.label && <Text style={styles.label}>{props.label}</Text>}
              <TextInput
                {...props}
                value={value}
                onChangeText={onChange}
                onBlur={() => {
                  onBlur();
                  setIsFocused(false);
                }}
                style={{ ...styles.input, ...(isFocused && styles.inputFocus) }}
                placeholderTextColor={theme.color.text.secondary}
                onFocus={(e) => {
                  setIsFocused(true);
                }}
                secureTextEntry={secureTextEntry}
                
              ></TextInput>
              {props.secureTextEntry && (
                <Pressable style={styles.inputSecureTextEntry} onPress={()=>{setsecureTextEntry(!secureTextEntry)}}>
                  {secureTextEntry ? <MaterialCommunityIcons name="eye" size={20} color="white" /> : <MaterialCommunityIcons name="eye-off" size={20} color="white" />}
                </Pressable>
              )}
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </View>
          )}
        ></Controller>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.color.text.secondary}
          onFocus={(e) => {
            setIsFocused(true);
          }}
        ></TextInput>
      </View>
    );
  }
}
