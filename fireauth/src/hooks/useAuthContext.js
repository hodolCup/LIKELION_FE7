import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export useAuthContext = () => {
    const context = userContext(AuthContext);
    return context;
}