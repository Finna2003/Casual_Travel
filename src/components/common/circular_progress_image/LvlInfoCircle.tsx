import {ColorValue} from "react-native";
import {Fragment} from "react";
import {Circle, Text} from "react-native-svg";
import {FONT} from "../../../constants/theme";

type LvlInfoOptions = {
    coord: number
    strokeWidth: number,
    strokeRadius: number,
    strokeColor: ColorValue
    backgroundColor: ColorValue,
    text: string,
    fontColor: ColorValue,
    fontSize: number,
    fontFamily: string,
}

export default function LvlInfoCircle(props: LvlInfoOptions){

    return (
        <Fragment>
            <Circle
                cx={props.coord}
                cy={props.coord}
                r={props.strokeRadius}
                stroke={props.strokeColor}
                strokeWidth={props.strokeWidth}
                fill={props.backgroundColor}
            />
            <Text
                x={props.coord}
                y={props.coord}
                textAnchor="middle"
                dy=".3em"
                fill={props.fontColor}
                fontSize={props.fontSize + 1} // this is the trick to make the font look the way i want it to
                fontFamily={FONT.regular} // custom font family didn't support
                fontWeight={"bold"} // this is the trick to make the font look the way i want it to
            >
                {props.text}
            </Text>
        </Fragment>
    )
}
