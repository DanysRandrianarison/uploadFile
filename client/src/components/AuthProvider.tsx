import axios from "axios";
import React, { ReactNode, useState } from "react"
import authContext from "../context/authContext";
type PropsChild = {
    children : ReactNode
}
type Itoken = {
    token:string | null
}

const AuthProvider : React.FC<PropsChild> = ({children})=> {
    const [token, setToken] = useState<string | null>('');
    const handleLogin = async ()=> {
        const token = localStorage.getItem('token')
        setToken(token)
    }
    const handleLogout = async ()=> {
         localStorage.removeItem('token');
         setToken(null)
    }

    const value = {
        token,
        onLogin:handleLogin,
        onLogout: handleLogout
    }
    return (
         <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider