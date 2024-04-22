import React from "react";
import {
    Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType,
} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import { forwardRef } from "react";


type TripHistoryFieldProps = {
    text: string;
    btnStyles: StyleProp<ViewStyle>;
    btnTextStyles: StyleProp<TextStyle>;
    btnTextStyles2: StyleProp<TextStyle>;
    imagePath: ImageSourcePropType; // Доданий новий параметр для шляху до зображення
    date: string; // Параметр для дати
};

const TripHistoryField = forwardRef((props: TripHistoryFieldProps, ref) => {
    return (
        <Pressable
            style={StyleSheet.compose(styles.container, props.btnStyles)}
        >
            <View style={styles.leftContainer}>
                <View style={styles.circle}>
                    <Image
                           style={styles.image}
                           source={props.imagePath}
                    />
                </View>
            </View>
            {/* Текст */}
            <View style={styles.container2}>
            <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                {props.text}{'\n'}

            </Text>
            <Text style={StyleSheet.compose(styles.btnText2, props.btnTextStyles2)}>
                {props.date}
            </Text>
            </View>
        </Pressable>
    );
});

export default TripHistoryField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: SIZES.pressable.defaultWidth,
        borderRadius: 12,
        marginBottom: SIZES.pressable.defaultMargin,
        marginTop: SIZES.pressable.defaultMargin,
        overflow: "hidden",
        backgroundColor: COLORS.white
    },
    container2: {
        padding: SIZES.pressable.defaultPadding,
        flexDirection: "column",
        justifyContent: "space-between"
    },

    leftContainer: {
        marginRight: 10,
    },
    circle: {
        width: 81,
        height: 81,
        borderRadius: 7,
        overflow: "hidden",
        backgroundColor: COLORS.black
    },
    image: {
        width: "100%",
        height: "100%",
    },
    btnText: {
    },
    btnText2: {
    },
});
