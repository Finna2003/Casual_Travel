import {ColorValue, StyleSheet, View} from "react-native";

type ProgressLineOptions = {
    progress: number,
    color: ColorValue
}

export default function ProgressLine(props: ProgressLineOptions){
    const styles = createStyles(props.progress, props.color);
    return (
        <View style={styles.cont}>
            <View style={styles.progress}/>
            <View style={styles.total}/>
        </View>
    )
}

const createStyles = (progress: number, color: ColorValue) => StyleSheet.create({
    cont: {
        flex: 1,
        position: "relative"
    },
    progress: {
        position: "absolute",
        height: "100%",
        backgroundColor: color,
        width: `${progress}%`,
        zIndex: 1
    },
    total: {
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.3,
        backgroundColor: color
    },
})
