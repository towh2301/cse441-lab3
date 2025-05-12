import { StyleSheet } from "react-native";
export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    normalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
    errorText: {
        fontSize: 16,
        color: "red",
    },
});