import {View} from "react-native";
import {ReactNode} from "react";
import {COLORS} from "../../constants/theme";

export default function ProjectBlock({children}: {children: ReactNode}){
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: 20,
            width: "100%",
            padding: 15
        }}>
            {children}
        </View>
    )
}
