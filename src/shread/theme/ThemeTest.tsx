import { View, Text, ScrollView } from "react-native";
import theme from ".";
import { AppButton, AppCard, AppText, AppH1Text } from "../components";
import { AppSmallText } from "../components/text/Text";
import { AppHStack, AppVStack } from "../components/stack/Stack";

export function ThemeTest() {
  return (
    <ScrollView style={{ width: "100%", gap: 20, display: "flex" }}>
        <AppCard variant="primary" style={{ height: 125 }}>
            <AppH1Text variant="primary">default card</AppH1Text>
        </AppCard>

        <AppCard variant="primary" style={{ height: 125 }}>
            <AppH1Text variant="primary">primary card</AppH1Text>
        </AppCard>

        <AppCard variant="secondary" style={{ height: 125 }}>
            <AppH1Text variant="primary">secondary card</AppH1Text>
        </AppCard>

        <AppCard variant="tertiary" style={{ height: 125 }}>
            <AppH1Text variant="primary">tertiary card</AppH1Text>
        </AppCard>

        <AppVStack spacing={16} >
            <AppButton>Default Button</AppButton>
            <AppButton variant="primary">primary button</AppButton>
            <AppButton variant="secondary">seconday button</AppButton>
            <AppButton variant="tertiary">tertiary button</AppButton>
        </AppVStack>
        
    </ScrollView>
  );
}
