import {Image, Pressable, View, Text, StyleSheet} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, LatLng, Region} from "react-native-maps";
import {API_KEY, INITIAL_REGION, MAP_STYLE} from "../../../constants/map";
import ProjectLoadingScreen from "../../../components/common/ProjectLoadingScreen";
import {RefObject, useEffect, useRef, useState} from "react";
import {COLORS, FONT, FONT_SIZES} from "../../../constants/theme";
import {usePlaces} from "../../../contexts/places/PlacesProvider";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {router} from "expo-router";
import {useAutoRoute} from "../../../contexts/AutoRouteProvider";
import MapViewDirections from "react-native-maps-directions";
import ProjectButton from "../../../components/common/ProjectButton";

export default function Map(){
    const mapViewRef = useRef<MapView>(null);
    const {useIconDetails} = usePlaces();
    const {placesIconDetails} = useIconDetails();
    const {routePlaces,setRoutePlaces} = useAutoRoute();
    const [timeRouteString, setTimeRouteString] = useState<string | null>(null);
    const [priceRouteString, setPriceRouteString] = useState<string | null>(null);

    const getStringTimeRoutePlaces = (time: number) => {
        if (routePlaces){
            const hours = Math.floor(time / 60);
            const minutes = Math.floor(time % 60);

            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        }
        return null;
    }

    const getStringPriceRoutePlaces = () => {
        if (routePlaces){
            const sum = routePlaces
                .map(e => e.visitCost)
                .reduce((prev, cur) => prev + cur, 0);
            return `${Math.round(sum)}`;
        }
        return null;
    }

    useEffect(() => {
        setPriceRouteString(getStringPriceRoutePlaces());
    }, [routePlaces]);

    if (!placesIconDetails){
        return <ProjectLoadingScreen/>
    }

    const userLocation: LatLng = {
        latitude: 50.432824442132656,
        longitude: 30.52877002763788
    }

    return (
        <View>
            <MapView
                ref={mapViewRef}
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                customMapStyle={MAP_STYLE}
                initialRegion={INITIAL_REGION}
            >
                <Marker
                    coordinate={userLocation}
                    style={{width: 28, height: 28}}
                >
                    <View
                        style={{
                            borderRadius: 100,
                            overflow: "hidden",
                            width: 28,
                            height: 28,
                            borderWidth: 4,
                            borderColor: COLORS.black
                        }}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#1E90FF"
                            }}
                        />
                    </View>
                </Marker>
                {placesIconDetails.map(e => (
                    <Marker
                        key={e.id}
                        coordinate={e.coords}
                        style={{width: 36, height: 36}}
                    >
                        <View
                            style={{
                                backgroundColor: routePlaces?.find(v => v.id === e.id) ? "#1E90FF" : e.iconBackgroundColor,
                                borderRadius: 100,
                                height: 36,
                                width: 36,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Image
                                source={e.iconUrl === "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet.png" ? require('../../../assets/images/map-default-icon.png') : {uri: e.iconUrl}}
                                style={{height: "60%", width: "60%"}}
                            />
                        </View>
                    </Marker>
                ))}
                {routePlaces && (
                    <MapViewDirections
                        origin={userLocation}
                        destination={routePlaces[routePlaces.length - 1].coords}
                        waypoints={routePlaces.slice(0, routePlaces.length).map(e => e.coords)}
                        strokeWidth={5}
                        strokeColor={"#1E90FF"}
                        mode={"WALKING"}
                        apikey={API_KEY}
                        onReady={result => {
                            let r = {
                                ...userLocation,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            };
                            setTimeRouteString(
                                getStringTimeRoutePlaces(
                                    routePlaces
                                    .map(e => e.visitTime)
                                    .reduce((prev, cur) => prev + cur, 0)
                                    + result.duration
                                ))
                            if (mapViewRef.current){
                                mapViewRef.current.animateToRegion(r, 1000);
                            }
                        }}
                    />
                )}
            </MapView>

            <View style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                alignItems: "flex-end"
            }}>
                {!routePlaces && (
                    <View style={{
                        marginRight: 20,
                        marginBottom: 20,
                        width: 65,
                        height: 65,
                        borderRadius: 100,
                        overflow: "hidden"
                    }}>
                        <Pressable
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: COLORS.white,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => router.push('/automatic-route-form')}
                        >
                            <View>
                                <Entypo name="plus" size={40} color="black" />
                            </View>
                        </Pressable>
                    </View>
                )}
                {(routePlaces && timeRouteString && priceRouteString &&
                    <View style={{
                        width: "100%",
                        paddingHorizontal: 25,
                        paddingVertical: 7,
                        borderTopStartRadius: 25,
                        borderTopEndRadius: 25,
                        backgroundColor: COLORS.white,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <View style={{flexDirection: "row"}}>
                            <View style={{marginRight: 30, alignItems: "center"}}>
                                <View>
                                    <Text style={styles.route_info_values}>
                                        {priceRouteString}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.route_info_titles}>
                                        {"ГРН"}
                                    </Text>
                                </View>
                            </View>
                            <View style={{alignItems: "center"}}>
                                <View>
                                    <Text style={styles.route_info_values}>
                                        {timeRouteString}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.route_info_titles}>
                                        {"ГОД"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <ProjectButton
                                text={'Перервати'}
                                onPress={() => setRoutePlaces(null)}
                                btnStyles={{
                                    width: 140,
                                    backgroundColor: '#f44336',
                                    borderRadius: 100,
                                    paddingVertical: 18
                                }}
                                btnTextStyles={{
                                    fontSize: 18,
                                    color: COLORS.white
                                }}
                            />
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    route_info_values: {
        fontFamily: FONT.bold,
        fontSize: 25,
        color: COLORS.black,
    },
    route_info_titles: {
        fontFamily: FONT.bold,
        fontSize: 15,
        color: COLORS.grey
    }
});
