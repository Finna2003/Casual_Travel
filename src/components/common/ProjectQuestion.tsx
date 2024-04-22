import React, {useState} from "react";
import {
    Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType,
} from "react-native";
import {COLORS, FONT, FONT_SIZES, SIZES} from "../../constants/theme";
import { forwardRef } from "react";

export type Answer = {
    id: number;
    text: string;
    value?: any;
};

type QuestionProps = {
    titleFontSize?: number,
    text: string;
    answers: Answer[];
    onSelect: (val: any) => void;
};
const ProjectQuestion = forwardRef((props: QuestionProps, ref) => {
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

    const handleSelect = (e: Answer) => {
        props.onSelect(e.value);
        setSelectedAnswer(e);
    }

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: 20,
        }}>
            <View style={{
                padding: 15
            }}>
                <Text
                    style={{
                        fontFamily: FONT.bold,
                        fontSize: props.titleFontSize ? props.titleFontSize : FONT_SIZES.sectionTitle
                    }}
                >
                    {props.text}
                </Text>
            </View>
            <View
                style={{
                    borderColor: COLORS.light_grey,
                    paddingBottom: 2
                }}
            >
                {props.answers.map(e => (
                    <Pressable
                        key={e.id}
                        style={{
                            padding: 15,
                            width: "100%",
                            borderTopWidth: 2,
                            borderColor: COLORS.light_grey
                        }}
                        onPress={() => handleSelect(e)}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <View style={{
                                width: "90%"
                            }}>
                                <Text
                                    style={{
                                        fontFamily: FONT.regular,
                                        fontSize: 16,
                                    }}
                                >
                                    {e.text}
                                </Text>
                            </View>
                            <View>
                                <View
                                    style={{
                                        width: 23,
                                        height: 23,
                                        borderRadius: 100,
                                        borderColor: selectedAnswer?.id === e.id ? COLORS.primary : COLORS.grey,
                                        borderWidth: 2,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {selectedAnswer?.id === e.id && (
                                        <View
                                            style={{
                                                width: "80%",
                                                height: "80%",
                                                backgroundColor: COLORS.primary,
                                                borderRadius: 100
                                            }}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    )
});
export default ProjectQuestion;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: SIZES.pressable.defaultWidth,
        padding: SIZES.pressable.defaultPadding,
        borderRadius: SIZES.pressable.defaultBorderRadius,
        marginBottom: SIZES.pressable.defaultMargin,
        marginTop: SIZES.pressable.defaultMargin,
        backgroundColor: COLORS.light_grey
    },
    btnText: {
        alignSelf: "center",
    },
});
