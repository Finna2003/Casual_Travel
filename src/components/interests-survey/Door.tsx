import {Image, ImageSourcePropType, Text, View} from "react-native";
import {interest, interestsSurveyDoor, useInterestsSurvey} from "../../contexts/InterestsSurveyProvider";
import ProjectBlock from "../common/ProjectBlock";
import {FONT, FONT_SIZES} from "../../constants/theme";
import ProjectQuestion from "../common/ProjectQuestion";
import ProjectButtonDark from "../common/ProjectButtonDark";
import {router} from "expo-router";
import React, {useEffect, useState} from "react";
import ProjectLoadingScreen from "../common/ProjectLoadingScreen";

type doorOptions = {
    door: interestsSurveyDoor,
    img: ImageSourcePropType,
    buttonText: string,
    onSubmit: () => void
}
export default function Door(props: doorOptions)
{
    const {updateInterestsPoint, sendForm} = useInterestsSurvey()
    const [questionStatuses, setQuestionStatuses] = useState<(interest | null)[] | null>(null);
    const fillStatuses = () => {
        setQuestionStatuses(Array(props.door.questions.length).fill(null));
    }

    useEffect(() => {
        if (props.door){
            fillStatuses();
        }
    }, [props.door]);

    if (!questionStatuses){
        return <ProjectLoadingScreen/>;
    }

    return (
        <View>
            <View style={{
                marginTop: 30,
            }}>
                <ProjectBlock>
                    <View style={{alignItems: "center"}}>
                        <Text
                            style={{
                                fontSize: FONT_SIZES.pageTitle,
                                fontFamily: FONT.bold
                            }}
                        >
                            {`${props.door.nameForUser}`}
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 30,
                        borderRadius: 20,
                        overflow: "hidden"
                    }}>
                        <Image
                            style={{
                                width: "100%",
                                resizeMode: "stretch"
                            }}
                            source={props.img}
                        />
                    </View>
                </ProjectBlock>
            </View>
            {props.door.questions.map(e => (
                <View key={e.id}>
                    {e.prefaceText && (
                        <View style={{marginTop: 30}}>
                            <ProjectBlock>
                                <View>
                                    <Text style={{
                                        fontFamily: FONT.regular,
                                        fontSize: FONT_SIZES.medium,
                                        lineHeight: 24
                                    }}>
                                        {e.prefaceText}
                                    </Text>
                                </View>
                            </ProjectBlock>
                        </View>
                    )}
                    <View style={{marginTop: 30}}>
                        <ProjectQuestion
                            titleFontSize={18}
                            text={e.text}
                            answers={e.answerOptions.map(e2 => ({
                                id: e2.id,
                                text: e2.text,
                                value: e2.interest
                            }))}
                            onSelect={(val: interest) => {
                                questionStatuses[(e.id % props.door.questions.length + 1) - 1] = val
                            }}
                        />
                    </View>
                </View>
            ))}
            <View style={{marginTop: 30}}>
                <ProjectButtonDark text={props.buttonText} onPress={() => {
                    if (questionStatuses && !questionStatuses.includes(null)){
                        updateInterestsPoint({
                            Historical: questionStatuses.filter(e => e === "Historical").length,
                            Naturialical: questionStatuses.filter(e => e === "Naturialical").length,
                            Artistic: questionStatuses.filter(e => e === "Artistic").length,
                            Entertainment: questionStatuses.filter(e => e === "Entertainment").length,
                        })
                        sendForm();
                        props.onSubmit();
                    }
                }}/>
            </View>
        </View>
    )
}
