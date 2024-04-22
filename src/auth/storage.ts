import {useCallback, useEffect, useState} from "react";
import {deleteItemAsync, getItemAsync, setItemAsync} from "expo-secure-store";

// [[isLoading, value], setValue]
type UseStateHook = [[boolean, string | null], (value: string | null) => void];

function setStorageItemAsync(key: string, value: string | null){
    if (value){
        return setItemAsync(key, value)
    }
    else{
        return deleteItemAsync(key);
    }
}

export function useStorageState(key: string): UseStateHook{
    const [state, setState] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getItemAsync(key)
            .then(value => {
                setState(value)
                setIsLoading(false);
            });
    }, [key])

    const setValue = useCallback((value : string | null) => {
        setIsLoading(true);
        setStorageItemAsync(key, value)
            .then(() => {
                setState(value)
                setIsLoading(false);
            })
    }, [key]);

    return [[isLoading, state], setValue];
}
