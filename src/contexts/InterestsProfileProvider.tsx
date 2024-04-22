import React, {createContext, ReactNode, useContext, useState} from "react";
import {interestsPointInfo} from "./InterestsSurveyProvider";

const InterestsProfileContext = createContext<{
    interests: interestsPointInfo | null,
    setInterests:  React.Dispatch<React.SetStateAction<interestsPointInfo | null>>
} | null>(null);

export function useInterestsProfile(){
    const context = useContext(InterestsProfileContext);

    if (!context){
        throw new Error("Provide InterestsProfileProvider");
    }

    return context;
}

export default function InterestsProfileProvider({children}: {children: ReactNode}){
    const [interests, setInterests] =
        useState<interestsPointInfo | null>(null);

    return (
        <InterestsProfileContext.Provider
            value={{
                interests: interests,
                setInterests: setInterests
            }}
        >
            {children}
        </InterestsProfileContext.Provider>
    )
}