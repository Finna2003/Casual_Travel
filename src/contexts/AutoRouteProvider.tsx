import {createContext, ReactNode, useContext, useState} from "react";
import {placeDbDetails} from "./places/usePlacesDbDetails";

const AutoRouteContext = createContext<
    {
        routePlaces: placeDbDetails[] | null,
        setRoutePlaces: (v: placeDbDetails[] | null) => void
    }
    | null>(null)

export function useAutoRoute(){
    const context = useContext(AutoRouteContext);

    if (!context){
        throw Error("AutoRouteContext not provided");
    }

    return context;
}

export default function AutoRouteProvider({children} : {children: ReactNode}){
    const [routePlaces, setRoutePlaces] = useState<placeDbDetails[] | null>(null);
    return (
        <AutoRouteContext.Provider
            value={{
                routePlaces: routePlaces,
                setRoutePlaces: setRoutePlaces
            }}
        >
            {children}
        </AutoRouteContext.Provider>
    )
}