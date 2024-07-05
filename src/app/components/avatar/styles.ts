import { StyleSheet } from "react-native";

import { theme } from "@/app/themes";

export const styles = StyleSheet.create({
    letter: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.white,
    },
    text: {
        fontFamily: theme.fontFamily.medium
    }
})