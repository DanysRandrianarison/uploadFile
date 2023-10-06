import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}: {children:ReactNode}) => {
    
    if(!true) {
      return <Navigate replace to="/login"/>
    }
    return children
    
}
export default ProtectedRoute