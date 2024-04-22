import {createContext, ReactNode, useContext} from "react";
import {placeDbDetails, usePlacesDbDetails} from "./usePlacesDbDetails";
import {placeIconDetails, usePlacesIconDetails} from "./usePlacesIconDetails";

const PlacesContext = createContext<
    {
        useDbDetails: () => {placesDbDetails: placeDbDetails[] | null}
        useIconDetails: () => {placesIconDetails: placeIconDetails[] | null}
    } | null>(null);

export function usePlaces(){
    const context = useContext(PlacesContext);

    if (!context){
        throw Error("PlacesContext not provided");
    }

    return context;
}

export default function PlacesProvider({children}: {children: ReactNode}){

    return (
        <PlacesContext.Provider value={{
            useDbDetails: usePlacesDbDetails,
            useIconDetails: usePlacesIconDetails
        }}>
            {children}
        </PlacesContext.Provider>
    )
}

