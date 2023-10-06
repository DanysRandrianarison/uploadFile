import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "./layout";



const Dashboard = () => {
    let shoulRedirect = true;
    if(!localStorage.getItem('token')) {
      shoulRedirect = true
    }
    else {shoulRedirect = false}
    
    return (
        <div className="" >
            
            <div className=" pt-9">
                   
            </div>
            {
                shoulRedirect && <Navigate to="/login" replace/>
            }
        </div>
    )
}
export default Dashboard