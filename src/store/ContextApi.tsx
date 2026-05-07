import {  createContext, useState, type ReactNode } from "react";



interface Props{
    tag:string,
    setTag:(val:string)=>void
}


export const Context=createContext<Props | null>(null)


const Provider=({children}:{children:ReactNode})=>{
    const [tag,setTag]=useState<string>("Home");


    return <Context.Provider value={{tag,setTag}}>
    {children}
    </Context.Provider>
}
export default Provider