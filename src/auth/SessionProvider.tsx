import {createContext, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {useStorageState} from "./storage";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
    RegisterRequestData,
    RegisterResponse201,
    SignInRequestData,
    SignInResponse201
} from "./dto";
import {axiosBase} from "../utility/axiosBase";

const AuthContext = createContext<
    {
        isLoading: boolean,
        isSession: boolean,
        register: (data: RegisterRequestData) => Promise<void | AxiosError>,
        signIn: (data: SignInRequestData) => Promise<void | AxiosError>,
        signOut: () => void}
    | null>(null)

export function useSession(){
    const value = useContext(AuthContext);
    if (!value){
        throw new Error("useSession must be wrapped in a <SessionProvider />");
    }

    return value;
}


type useSessionHook = [
    [boolean, boolean],
    (sessionToken: string | null) => void
]
function useSessionState() : useSessionHook{
    const [[isLoading, storageValue], setStorageValue] = useStorageState('session');
    const [isSession, setIsSession] = useState<boolean>(false);

    useEffect(() => {
        setIsSession(true);
       if (storageValue){
           setIsSession(true);
           axiosBase.defaults.headers.common.Authorization = `Bearer ${storageValue}`
       }
       else {
           delete axiosBase.defaults.headers.common.Authorization
       }
    }, [storageValue]);

    const setSessionToken = (value: string | null) => {
        setStorageValue(value)
    }

    return [[isLoading, isSession], setSessionToken]
}

export default function SessionProvider({children}: {children: ReactNode}){
    const [[isSessionLoading, isSession], setSession] = useSessionState();

    return (
        <AuthContext.Provider value={{
            isLoading: isSessionLoading,
            isSession: isSession,
            register: (data: RegisterRequestData) => new Promise((resolve, reject) => {
                /*axiosBase.post<RegisterResponse201>("/user-management/register", data)
                    .then((response: AxiosResponse<RegisterResponse201>) => {
                        setSession(response.data.token);
                        resolve();
                    })
                    .catch((error: AxiosError) => {
                        reject(error)
                    })*/
                setSession('asd');
                resolve();
            }),
            signIn: (data: SignInRequestData) => new Promise((resolve, reject) => {
                /*axiosBase.post<SignInResponse201>("/user-management/sign-in", data)
                    .then((response: AxiosResponse<SignInResponse201>) => {
                        setSession(response.data.token);
                        resolve();
                    })
                    .catch((error: AxiosError) => {
                        reject(error)
                    })*/
                setSession('asd');
                resolve();
            }),
            signOut: () => setSession(null)
        }}>
            {children}
        </AuthContext.Provider>
    )
}
