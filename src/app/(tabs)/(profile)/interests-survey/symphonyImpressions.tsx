import {ScrollView} from "react-native";
import {useInterestsSurvey} from "../../../../contexts/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import {COLORS} from "../../../../constants/theme";
import Door from "../../../../components/interests-survey/Door";
import {router} from "expo-router";
import React from "react";

export default function SymphonyImpressions(){
    const {symphonyImpressions} = useInterestsSurvey();

    if (!symphonyImpressions){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <Door
                door={symphonyImpressions}
                img={require('../../../../assets/images/door-symphonyImpressions.jpg')}
                onSubmit={() => router.push('/profile')}
                buttonText={"Завершити"}
            />
        </ScrollView>
    )
}
