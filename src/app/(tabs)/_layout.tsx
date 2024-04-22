import {Redirect, Tabs} from "expo-router";
import {COLORS, FONT} from "../../constants/theme";
import {useSession} from "../../auth/SessionProvider";
import ProjectLoadingScreen from "../../components/common/ProjectLoadingScreen";
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default function TabsLayout () {
    const {isSession, isLoading} = useSession();

    if (isLoading){
        return <ProjectLoadingScreen/>
    }

    if(!isSession){
        return <Redirect href={'/login'}/>
    }

    const activeColor = COLORS.primary;
    const inactiveColor = "#abb3c0"

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarStyle: {
                    borderTopColor: "#b7b7b7",
                    backgroundColor: COLORS.white,
                    height: 83
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontFamily: FONT.regular,
                    marginTop: -3
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarItemStyle: {
                    marginBottom: 3
                },
            }}
            sceneContainerStyle={{
                backgroundColor: COLORS.light_grey,
            }}
        >
            <Tabs.Screen
                name={"index"}
                options={{
                    href: null
                }}
            />
            <Tabs.Screen
                name={"(profile)"}
                options={{
                    tabBarLabel: 'Профіль',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <FontAwesome5 name="user-alt" size={24} color={focused ? activeColor : inactiveColor}/>
                    ),
                }}
            />
            <Tabs.Screen
                name={"(map)"}
                options={{
                    tabBarLabel: "Створити",
                    headerTransparent: true,
                    headerTitleStyle: {display: "none"},
                    tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="earth-plus" size={30} color={focused ? activeColor : inactiveColor} />
                    ),
                }}
            />
            <Tabs.Screen
                name={"tripsHistory"}
                options={{
                    tabBarLabel: "Мої відвідування",
                    headerTitle: 'Мої відвідування',
                    headerStyle: {
                        backgroundColor: COLORS.white,
                    },
                    tabBarLabelStyle: {
                        color: COLORS.black, // Колір тексту вкладки
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons name="history" size={34} color={focused ? activeColor : inactiveColor} />
                    ),
                }}
            />
        </Tabs>
    )
}
