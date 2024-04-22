import {Dimensions, Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

let { width, height } = Dimensions.get('window');

if(Platform.OS === "ios"){
    height -= 82;
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalAdaptive = (size: number) => (width / guidelineBaseWidth) * size;
const verticalAdaptive = (size: number) => (height / guidelineBaseHeight) * size;
const moderateAdaptive = (size: number, factor = 0.5) => size + (horizontalAdaptive(size) - size) * factor;

export { horizontalAdaptive, verticalAdaptive, moderateAdaptive };
