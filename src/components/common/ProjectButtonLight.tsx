import {forwardRef} from "react";
import {GestureResponderEvent, StyleSheet} from "react-native";
import ProjectButton from "./ProjectButton";
import {COLORS, SIZES} from "../../constants/theme";

type ProjectButtonLightOptions = {
    text: string,
    onPress: (event: GestureResponderEvent) => void
    width?: number
}

const ProjectButtonLight = forwardRef((props: ProjectButtonLightOptions, ref) => {
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

export default ProjectButtonLight

const styles = StyleSheet.create({
    btnStyles: {
        backgroundColor: 'transparent',
        borderWidth: SIZES.pressable.defaultBorderWidth,
        borderColor: COLORS.primary
    },
    btnTextStyles: {
        color: COLORS.primary
    }
})
