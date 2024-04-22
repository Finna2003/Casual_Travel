import {useEffect, useState} from "react";
import {LatLng} from "react-native-maps";
import {axiosBase} from "../../utility/axiosBase";
import {PLACES, ROUTE_PLACES} from "../../constants/response";

export type placeDbDetails = {
    id: number,
    visitTime: number,
    visitCost: number,
    name: string,
    coords: LatLng,
}

export function usePlacesDbDetails(): {
    placesDbDetails: placeDbDetails[] | null
}{
    const [places, setPlaces] = useState<placeDbDetails[] | null>(null);
    const loadFromServer = () => {
        /*axiosBase.get("/places")
            .then(response => {
                if (response.status === 200){
                    // @ts-ignore
                    setPlaces(response.data.map(e => ({
                        id: e.placeId,
                        name: e.nameForUser,
                        coords: {
                            latitude: parseFloat(e.location.x),
                            longitude: parseFloat(e.location.y)
                        }
                    })));
                }
                else throw new Error();
            })
            .catch(err => {
                alert(err)
            });*/

        new Promise<placeDbDetails[]>((resolve, reject) => {
            // @ts-ignore
            const res = JSON.parse(PLACES);
            // @ts-ignore
            resolve(res.map(e => ({
                id: e.placeId,
                visitTime: e.visitTime,
                visitCost: e.visitCost,
                name: e.nameForUser,
                coords: e.location
            })));
        })
            .then(res => {
                setPlaces(res)
            })
            .catch(err => alert(err.message));

        /*new Promise<placeDbDetails[]>((resolve, reject) => {
            setTimeout(() => {
                resolve( [
                    {
                        id: 1,
                        name: "Holosiivskyi National Natural Park",
                        coords: {
                            latitude: 50.36655788707013,
                            longitude: 30.49768444173739
                        }
                    },
                    {
                        id: 2,
                        name: "Sikorsky International Airport Kyiv",
                        coords: {
                            latitude: 50.4106665963391,
                            longitude: 30.438216318517146
                        }
                    },
                ],)
            }, 0)
        }).then(response => {
            setPlaces(response as placeDbDetails[]);
        })
            .catch(err => alert(err))*/
    }

    useEffect(() => {
        loadFromServer();
    }, [])

    return {placesDbDetails: places}
}
