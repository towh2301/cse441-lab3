import { Text, View } from "react-native";
import styles from "../styles";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lab 3 - CSE441</Text>
            <Text style={styles.normalText}>Bui Hoang Huy</Text>
            <Text style={styles.normalText}>2031200010</Text>
        </View>
    )
}