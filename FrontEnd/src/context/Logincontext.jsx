import React, { createContext, useEffect, useState } from 'react'
import axios from "../api/Axios"

export const loginContext = createContext()

const Logincontext = (props) => {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(null)

    const userloggedin = async()=>{
        try {
            await axios.get("/")
            setLogin(true)
        } catch (error) {
            console.log(error);
            setLogin(false)
        }
    }

    const userloggedout = async()=>{
        try {
            await axios.get("/user/signout")
            setLogin(false)
        } catch (error) {
            console.log(error);
            setLogin(true)
        }
    }

   

    useEffect(() => {
         userloggedin()
    }, [login])

    return (
        <loginContext.Provider value={{ login, setLogin, user, setUser, userloggedout }}>
            {props.children}
        </loginContext.Provider>
    )

}

export default Logincontext