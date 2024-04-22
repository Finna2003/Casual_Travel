import {Slot} from "expo-router";
import {setStatusBarStyle} from "expo-status-bar";
import SessionProvider from "../auth/SessionProvider";
import {useFonts} from "expo-font";
import axios from "axios";
import PlacesProvider from "../contexts/places/PlacesProvider";
import InterestsProfileProvider from "../contexts/InterestsProfileProvider";
import AutoRouteProvider from "../contexts/AutoRouteProvider";

export default function AppLayout (){
    const [fontsLoaded, fontError] = useFonts({
        InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
        InterBold: require('../assets/fonts/Inter-Bold.ttf')
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    axios.defaults.headers.common['Content-Type'] = 'application/json';

    setStatusBarStyle("dark");

    return (
        <SessionProvider>
            <PlacesProvider>
                <InterestsProfileProvider>
                    <AutoRouteProvider>
                        <Slot></Slot>
                    </AutoRouteProvider>
                </InterestsProfileProvider>
            </PlacesProvider>
        </SessionProvider>
    )
}
