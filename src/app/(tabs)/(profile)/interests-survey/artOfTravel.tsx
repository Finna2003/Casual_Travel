import {ScrollView, Text, View} from "react-native";
import {COLORS, FONT,} from "../../../../constants/theme";
import React, {useEffect, useState} from "react";
import ProjectButtonDark from "../../../../components/common/ProjectButtonDark";
import {router} from "expo-router";
import {interest, useInterestsSurvey} from "../../../../contexts/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import ProjectBlock from "../../../../components/common/ProjectBlock";
import Door from "../../../../components/interests-survey/Door";

export default function ArtOfTravel(){
    const {artOfTravel} = useInterestsSurvey();

    if (!artOfTravel){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <Door
                door={artOfTravel}
                img={require('../../../../assets/images/door-artOfTravel.jpg')}
                onSubmit={() => router.push('/interests-survey/ageMysteries')}
                buttonText={"Наступні двері"}
            />
        </ScrollView>
    )
}

