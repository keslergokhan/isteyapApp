import { Pressable, View,Text } from "react-native";
import styles from "./WelcomeContent.styles";
import WelcomeContentProps from "./WelcomeContent.types";
import { AppLogo } from "@/shread/components";
import { AppVStack } from "@/shread/components/stack/Stack";

export default function WelcomeContent(prosp:WelcomeContentProps) {
    return (
    <View style={styles.container}>
        <AppLogo size="large" variant="primary"></AppLogo>
        <AppVStack spacing={16}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.title}>{prosp.title}</Text>
            <Text style={styles.description}>{prosp.description}</Text>
        </AppVStack>
    </View>
    )
}