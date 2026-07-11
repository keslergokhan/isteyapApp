import { View,Text,ScrollView } from "react-native";
import AppButton from "../components";
import theme from ".";
import AppCard from "../components/card";

export function ThemeTest() {
  return (
    <ScrollView style={{width:"100%"}}>
      <AppButton>Merhaba dünya</AppButton>
      <AppButton variant="outline">Merhaba dünya</AppButton>
      <AppButton variant="secondary">Merhaba dünya</AppButton>

      <View
        style={{
          backgroundColor: theme.color.primary,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.primary</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.primarySoft,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.primarySoft</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.primaryDark,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.primaryDark</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.primaryLight,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.primaryLight</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.border,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.border</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.divider,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.divider</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.error,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.error</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.success,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.success</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.surface,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.surface</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.warning,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.warning</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.text.main,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.text.main</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.text.muted,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.text.muted</Text>
      </View>

      <View
        style={{
          backgroundColor: theme.color.text.secondary,
          width: 200,
          height: theme.spacing.xxxl,
        }}
      >
        <Text>theme.color.text.secondary</Text>
      </View>

      <AppCard>
        <Text>merhaba dünya</Text>
      </AppCard>
      <AppCard variant="outline">
        <Text>merhaba dünya</Text>
      </AppCard>
      <AppCard variant="secondary">
        <Text>merhaba dünya</Text>
      </AppCard>
    </ScrollView>
  );
}
