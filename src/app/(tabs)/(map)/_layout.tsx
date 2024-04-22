import {Stack} from "expo-router";
import {COLORS} from "../../../constants/theme";
import AutoRouteProvider from "../../../contexts/AutoRouteProvider";

export default function MapLayout(){
    return (
        <Stack
            screenOptions={{
                headerTintColor: COLORS.black,
                contentStyle: {
                    backgroundColor: COLORS.light_grey,
                },
                fullScreenGestureEnabled: true
            }}

        >
            <Stack.Screen
                name={"map"}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"automatic-route-form"}
                options={{
                    headerTitle: "Підбір маршруту",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: "bold"
                    }
                }}
            />
        </Stack>
    )
}