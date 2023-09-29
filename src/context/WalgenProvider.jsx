import { useState } from "react";
import walgenContext from "./walgenContext";
import { toast } from "react-toastify";

const MealProvider = (props) => {
    const host = "https://api.unsplash.com"
    const [user, setuser] = useState({
        id: 0, 
        name: '', 
        email: '', 
    })
    
    const notify = (error=false, message) => {
        if (!error) {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    

    return (
        <walgenContext.Provider value={{ 
            user, setuser, notify
         }}>
        { props.children }
        </walgenContext.Provider>
    );
};

export default MealProvider;