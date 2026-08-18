import { View, Text, TextInput } from "react-native";
import styles from "./AppTextInput.styles";
import AppTextInputProps from "./AppTextInput.types";
import { useState } from "react";
import theme from "@/shread/theme";
import { Controller, FieldValues } from "react-hook-form";

export default function AppTextInput<T extends FieldValues>(
  props: AppTextInputProps<T>
) {
  const [isFocused, setIsFocused] = useState(false);

  if (props.control && props.name) {
    return (
      <View style={styles.container}>
        <Controller
          control={props.control}
          name={props.name}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              {props.label && <Text style={styles.label}>{props.label}</Text>}
              <TextInput
                {...props}
                value={value}
                onChangeText={onChange}
                onBlur={()=>{
                    onBlur();
                    setIsFocused(false);
                }}
                style={{...styles.input,...(isFocused && styles.inputFocus)}}
                placeholderTextColor={theme.color.text.secondary}
                onFocus={(e) => { setIsFocused(true);}}
              ></TextInput>
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </>
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
        {<Text style={styles.errorText}>sdfsdfsd</Text>}
      </View>
    );
  }
}

/**
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
<>
    {props.label && <Text style={styles.label}>{props.label}</Text>}
    <TextInput
        {...props}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={styles.input}
        placeholderTextColor={theme.color.text.secondary}
        onFocus={(e) => {
        setIsFocused(true);
        }}
    ></TextInput>
    {<Text style={styles.errorText}>sdfsdfsd</Text>}
</>


 */
