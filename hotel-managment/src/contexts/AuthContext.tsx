import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { User } from '../types/user';
import { loginByToken } from '../apis/auth';

interface IAuthContext {
    children: ReactNode;
}

interface IAuthContextProvider {
    userState: IUserState
    setUserState: (userState: IUserState) => void
    logout: () => void
}

export interface IUserState {
    user: User | null
    token: string | null
    isLogin: boolean
}

export const AuthContextProvider = createContext<IAuthContextProvider | undefined>(undefined);


export const AuthContext: React.FC<IAuthContext> = ({ children }) => {

    const userStateDefault: IUserState = {
        isLogin: false,
        user: null,
        token: null,
    };

    const [userState, setUserState] = useState<IUserState>(userStateDefault);

    const autoLogin = async () => {
        if (localStorage.getItem('token')) {
            const res = await loginByToken()
            if (res?.data) {
                setUserState?.({
                    isLogin: true,
                    user: res.data,
                    token: res.data.token
                })
                localStorage.setItem('token', res.data.token)
            }
            else {
                localStorage.removeItem("token");
            }
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUserState({
            isLogin: false,
            user: null,
            token: null,
        });
    };

    useEffect(() => {
        autoLogin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const data = {
        userState,
        setUserState,
        logout
    };

    return (
        <AuthContextProvider.Provider value={data}>{children}</AuthContextProvider.Provider>
    );
};
