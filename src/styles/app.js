import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column",
        alignItems: "center",
        padding: 16
    },
    header: {
        fontSize: 31,
        fontWeight: "700",
        color: "#333"
    },
    form: {
        flex: 1,
        width: width - 60,
        margin: 30,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderColor: "#999",
        borderWidth: 2
    },
    movieTypes: {
        marginLeft: 16
    },
    label: {
        marginLeft: 16,
        marginTop: 16
    }
});

export default styles;
