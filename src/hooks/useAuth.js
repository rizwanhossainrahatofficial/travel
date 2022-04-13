import { useContext } from "react"
import { AuthContex } from "../components/context/AuthPorvider";




const useAuth=()=>{
    return useContext(AuthContex);
}

export default useAuth;