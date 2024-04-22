import {ColorValue, View} from "react-native";
import {Fragment} from "react";
import {Circle, G} from "react-native-svg";

export type ProgressCircleOptions = {
    coord: number
    radius: number,
    width: number,
    color: ColorValue,
    progressColor: ColorValue,
    progress: number
}

export default function ProgressCircle(props: ProgressCircleOptions){
    const circumference = 2 * Math.PI * props.radius;
    const progressValue = (props.progress / 100) * circumference;

    return (
        <Fragment>
            <G opacity={0.2}>
                <Circle
                    cx={props.coord}
                    cy={props.coord}
                    r={props.radius}
                    fill="transparent"
                    stroke={props.color}
                    strokeWidth={props.width}
                />
            </G>
            <Circle
                cx={props.coord}
                cy={props.coord}
                r={props.radius}
                fill="transparent"
                stroke={props.progressColor}
                strokeWidth={props.width}
                strokeDasharray={`${progressValue} ${circumference}`}
                strokeLinecap="round"
            />
        </Fragment>
    )
}
