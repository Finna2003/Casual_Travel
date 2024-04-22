import {useInterestsSurvey} from "../../../../contexts/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import {ScrollView} from "react-native";
import {COLORS} from "../../../../constants/theme";
import Door from "../../../../components/interests-survey/Door";
import {router} from "expo-router";
import React from "react";

export default function NaturalExperiment(){
    const {naturalExperiment} = useInterestsSurvey();

    if (!naturalExperiment){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <Door
                door={naturalExperiment}
                img={require('../../../../assets/images/door-naturalExperiment.jpg')}
                onSubmit={() => router.push('/interests-survey/symphonyImpressions')}
                buttonText={"Наступні двері"}
            />
        </ScrollView>
    )
}