import { Pressable, View,Text } from "react-native";
import styles from "./WelcomeContent.styles";
import WelcomeContentProps from "./WelcomeContent.types";
import { AppCard, AppLogo } from "@/shread/components";
import { AppVStack } from "@/shread/components/stack/Stack";

export default function WelcomeContent(prosp:WelcomeContentProps) {
    return (
    <AppCard style={styles.container}>
        <AppVStack spacing={48} style={{alignItems:"center"}}>
            <AppLogo size="large" variant="primary"></AppLogo>
            <AppVStack spacing={16}>
                <Text style={styles.title}>{prosp.title}</Text>
                <Text style={styles.description}>{prosp.description}</Text>
            </AppVStack>
        </AppVStack>
    </AppCard>
    )
}