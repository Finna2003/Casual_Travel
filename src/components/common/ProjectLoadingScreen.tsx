import {ActivityIndicator, View} from "react-native";

export default function ProjectLoadingScreen(){
    return (
        <View style={{height: "100%", justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size={"large"}/>
        </View>
    )
}
