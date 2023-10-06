import axios , {AxiosResponse} from "axios";
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

interface IUser {
    username:string;
    password: string;
}
const Login = () => {
      const {onLogin} = useContext(authContext)     ;
      let shoulRedirect = false; 
      const navigate = useNavigate()
    
    const [formdata, setFormdata] = useState<IUser>({username: "", password: ""});
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target;
        setFormdata({...formdata,[name]: value})
    }
    const handleLogin = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8001/login',formdata)
                            .then(res=> {
                                console.log(res.data);
                                if(res.data.token) {
                                    localStorage.setItem('token',res.data.token)
                                    if(localStorage.getItem('token')!==undefined) navigate('/')
                                    
                                }
                                
                            })

        }
        catch(error) {
            console.log(error)
        }
        
        

    }
    
    return (
        <div className="grid my-20">
            <div className="flex justify-center text-2xl">Login in your account </div>
            <form onSubmit={handleLogin} action="" className="grid justify-center p-5">
                <div className="grid">
                    <label htmlFor="">Username</label>
                    <input name="username" value={formdata.username} onChange={handleChange} type="text" className=" border border-cyan-800 rounded"/>
                </div>
                <div className="grid pt-2">
                    <label htmlFor="">Password</label>
                    <input value={formdata.password} name="password" onChange={handleChange} type="password" className="border border-cyan-700 rounded"/>
                </div>
                <button className="border border-slate-700 mt-2 py-1 bg-cyan-300 w-1/2 rounded">Login</button>
            </form>
            
             
             
        </div>
    )
}

export default Login