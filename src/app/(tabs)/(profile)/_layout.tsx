import {Stack} from "expo-router";
import {COLORS, FONT} from "../../../constants/theme";

export default function ProfileLayout(){
    return (
        <Stack
            screenOptions={{
                headerTintColor: COLORS.black
            }}
        >
            <Stack.Screen
                name={"profile"}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"interests-survey"}
                options={{
                    title: "Визначення інтересів",
                    headerTitleStyle: {
                        fontFamily: FONT.bold,
                        fontSize: 18
                    }
                }}
            />
        </Stack>
    )
}
