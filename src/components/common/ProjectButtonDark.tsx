import {forwardRef} from "react";
import {GestureResponderEvent, StyleSheet} from "react-native";
import ProjectButton from "./ProjectButton";
import {COLORS, SIZES} from "../../constants/theme";

type projectButtonDarkOptions = {
    text: string,
    onPress: (event: GestureResponderEvent) => void
    width?: number
}

const ProjectButtonDark = forwardRef((props: projectButtonDarkOptions, ref) => {
    return (
        <ProjectButton
            text={props.text}
            onPress={props.onPress}
            btnStyles={{
                ...styles.btnStyles,
                width: props.width ? props.width : SIZES.pressable.defaultWidth
            }}
            btnTextStyles={styles.btnTextStyles}/>
    )
})

export default ProjectButtonDark

const styles = StyleSheet.create({
    btnStyles: {
        backgroundColor: COLORS.primary
    },
    btnTextStyles: {
        color: COLORS.white
    }
})
