import {ColorValue, Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import Svg from "react-native-svg";
import ProgressCircle from "./ProgressCircle";
import LvlInfoCircle from "./LvlInfoCircle";

type CircularProgressOptions = {
    img: ImageSourcePropType,
    imgRadius: number,
    strokeRadius: number,
    strokeWidth: number,
    strokeColor: ColorValue,
    strokeProgressValue: number,
    infoStrokeRadius: number,
    infoStrokeWidth: number,
    infoStrokeColor: ColorValue,
    infoBackgroundColor: ColorValue,
    infoText: string,
    infoFontColor: ColorValue,
    infoFontSize: number,
    infoFontFamily: string
}

export default function CircularProgressImage(props: CircularProgressOptions){

    const styles = createStyles(props)

    //In react-native-svg stroke width extends in both directions, but it needs to expand outside
    const strokeRadiusAdjusted = props.strokeRadius + (props.strokeWidth / 2)
    const strokeCoordAdjusted = strokeRadiusAdjusted + (props.strokeWidth / 2)

    const infoStrokeRadiusAdjusted = props.infoStrokeRadius + (props.infoStrokeWidth / 2)
    const infoStrokeCoord = strokeRadiusAdjusted * 2 - props.strokeWidth * 1.75;

    return (
        <View style={styles.cont}>
            <View style={styles.img_cont}>
                <Image source={props.img} style={styles.img}/>
            </View>
            <Svg width={styles.cont.width} height={styles.cont.height}>
                <ProgressCircle
                    radius={strokeRadiusAdjusted}
                    coord={strokeCoordAdjusted}
                    width={props.strokeWidth}
                    color={props.strokeColor}
                    progressColor={props.strokeColor}
                    progress={props.strokeProgressValue}
                />
                <LvlInfoCircle
                    coord={infoStrokeCoord}
                    strokeWidth={props.infoStrokeWidth}
                    strokeRadius={infoStrokeRadiusAdjusted}
                    strokeColor={props.infoStrokeColor}
                    backgroundColor={props.infoBackgroundColor}
                    text={props.infoText}
                    fontColor={props.infoFontColor}
                    fontSize={props.infoFontSize}
                    fontFamily={props.infoFontFamily}
                />
            </Svg>
        </View>
    );
}

function createStyles(props: CircularProgressOptions){
    return StyleSheet.create({
        cont: {
            position: "relative",
            width: props.strokeRadius * 2 + props.strokeWidth * 2,
            height: props.strokeRadius * 2 + props.strokeWidth * 2,
        },
        img_cont: {
            left: props.strokeWidth + (props.strokeRadius - props.imgRadius),
            top: props.strokeWidth + (props.strokeRadius - props.imgRadius),
            width: props.imgRadius * 2,
            height: props.imgRadius * 2,
            borderRadius: props.imgRadius,
            overflow: "hidden",
            position: "absolute",
        },
        img: {
            width: "100%",
            height: "100%"
        }
    })
}
