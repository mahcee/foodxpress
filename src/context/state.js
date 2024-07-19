import {createContext, useContext, useState} from "react"
export const StateContext=createContext()
function State({children})
{
    const [currentUserId,setCurrentUserId]=useState("")
    const {subTotal,setSubTotal}=useContext(StateContext)
    return(
        
       < StateContext.Provider value ={{currentUserId,setCurrentUserId}}>
       {children}</StateContext.Provider>
        
    )
}
export default State;
