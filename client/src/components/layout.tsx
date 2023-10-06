import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ()=> {
    return (
        <div>
        <div className="flex justify-evenly bg-slate-300 py-2">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Logout</Link>
             
        </div>
        <Outlet/>
        </div>
    )
}
export default Layout