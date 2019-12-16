import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    inputContainer: {
        flex: 0,
        width: width - 92,
        height: 56,
        margin: 16
    }
});

export default styles;
