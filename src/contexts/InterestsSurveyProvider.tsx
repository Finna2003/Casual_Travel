import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {SURVEYS} from "../constants/response";
import {useInterestsProfile} from "./InterestsProfileProvider";

export type interestsPointInfo = {
    Historical: number,
    Naturialical: number,
    Artistic: number,
    Entertainment: number
}

const InterestsSurveyContext = createContext<
    {
        artOfTravel: interestsSurveyDoor | null,
        ageMysteries: interestsSurveyDoor | null,
        naturalExperiment: interestsSurveyDoor | null,
        symphonyImpressions: interestsSurveyDoor | null,
        updateInterestsPoint: (interests: interestsPointInfo) => void,
        sendForm: () => void
    } | null>(null);

export type interest = "Historical" | "Naturialical" | "Artistic" | "Entertainment";

type interestsSurveyQuestion = {
    id: number,
    prefaceText: string | null,
    text: string,
    answerOptions: {
        id: number,
        text: string,
        interest: interest
    }[]
}

export type interestsSurveyDoor = {
    id: number,
    nameForUser: string,
    questions: interestsSurveyQuestion[]
}

function splitText(text: string): {text: string, prefaceText: string | null} {
    if (text != "" && text) {
        const split = text.split('.');
        return {
            text: split[split.length - 1].trim(),
            prefaceText: split.length > 1 ? split.slice(0, split.length - 1).map(e => e.trim()).join('. ') : null
        }
    } else {
        throw new Error("text is empty")
    }
}

export function useInterestsSurvey(){
    const context = useContext(InterestsSurveyContext);

    if (!context){
        throw new Error("Provide Context");
    }

    return context;
}

export default function InterestsSurveyProvider({children}: {children: ReactNode}){
    const {setInterests} = useInterestsProfile();
    const [survey, setSurvey] = useState<interestsSurveyDoor[] | null>(null);
    const interestsPoint = useRef<interestsPointInfo>(
        {Historical: 0, Naturialical: 0, Artistic: 0, Entertainment: 0})

    useEffect(() => {
        setSurvey(
            JSON.parse(SURVEYS)
                .map((e: any) => ({
                    id: e.surveyId,
                    nameForUser: e.surveyName,
                    questions: e.questions.map((e2: any) => ({
                        id: e2.questionId,
                        ...splitText(e2.text),
                        answerOptions: e2.answerOptions.map((e3: any) => ({
                            id: e3.answerId,
                            text: e3.answerText,
                            interest: e3.interestName
                        }))
                    }))
                }))
        )
    }, [])

    const findDoor = (id: number) => {
        if (survey){
            const door = survey.find(e => e.id === id);
            if (door){
                return door
            }
        }
        return null;
    }

    return (
        <InterestsSurveyContext.Provider
            value={{
                artOfTravel: findDoor(1),
                ageMysteries: findDoor(2),
                naturalExperiment: findDoor(3),
                symphonyImpressions: findDoor(4),
                updateInterestsPoint: (interests: interestsPointInfo) => {
                    interestsPoint.current = {
                        Historical: interestsPoint.current.Historical + interests.Historical,
                        Naturialical: interestsPoint.current.Naturialical + interests.Naturialical,
                        Artistic: interestsPoint.current.Artistic + interests.Artistic,
                        Entertainment: interestsPoint.current.Entertainment + interests.Entertainment,
                    }
                },
                sendForm: () => {
                    const sum = Object.values(interestsPoint.current)
                        .reduce((prev, curr) => prev + curr, 0);

                    setInterests({
                        Historical: (interestsPoint.current.Historical / sum) * 100,
                        Naturialical: (interestsPoint.current.Naturialical / sum) * 100,
                        Artistic: (interestsPoint.current.Artistic / sum) * 100,
                        Entertainment: (interestsPoint.current.Entertainment / sum) * 100,
                    })
                }
            }}
        >
            {children}
        </InterestsSurveyContext.Provider>
    )
}
