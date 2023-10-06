import { createContext } from "react";
type ProviderType = {
    token: string | null;
    onLogin :()=> Promise<void>,
    onLogout:()=> Promise<void>
}
const initaleValue = {
    token :'',
    onLogin :  async ()=> {},
    onLogout : async ()=> {}
}

const authContext = createContext<ProviderType>(initaleValue)
export default authContext