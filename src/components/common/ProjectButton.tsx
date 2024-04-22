import {GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {FONT, SIZES} from "../../constants/theme";
import {forwardRef} from "react";

type projectButtonProps = {
    text: string,
    onPress: ((event: GestureResponderEvent) => void) | null | undefined,
    btnStyles: StyleProp<ViewStyle>
    btnTextStyles: StyleProp<TextStyle>
}

const ProjectButton = forwardRef((props: projectButtonProps, ref) => {
    return (
        <Pressable
            style={StyleSheet.compose(styles.btn, props.btnStyles)}
            onPress={props.onPress}
        >
            <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                {props.text}
            </Text>
        </Pressable>
    )
})

export default ProjectButton

const styles = StyleSheet.create({
    btn:{
        alignSelf: "center",
        justifyContent: "center",
        width: SIZES.pressable.defaultWidth,
        padding: SIZES.pressable.defaultPadding,
        borderRadius: SIZES.pressable.defaultBorderRadius,
        marginBottom: SIZES.pressable.defaultMargin, //Не забувай про 'margin collapsing'
        marginTop: SIZES.pressable.defaultMargin //Не забувай про 'margin collapsing'
    },
    btnText:{
        fontFamily: FONT.regular,
        alignSelf: "center",
    }
})
