import {View, Text, ScrollView} from "react-native";
import {useInterestsSurvey} from "../../../../contexts/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import {COLORS} from "../../../../constants/theme";
import Door from "../../../../components/interests-survey/Door";
import {router} from "expo-router";
import React from "react";

export default function AgeMysteries(){
    const {ageMysteries} = useInterestsSurvey();

    if (!ageMysteries){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <Door
                door={ageMysteries}
                img={require('../../../../assets/images/door-ageMysteries.jpg')}
                onSubmit={() => router.push('/interests-survey/naturalExperiment')}
                buttonText={"Наступні двері"}
            />
        </ScrollView>
    )
}
