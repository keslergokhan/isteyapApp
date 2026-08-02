import { createContext, useState } from "react";
import DefaultLayoutContextProps from "./DefaultLayoutContext.types";

const defaultProps:DefaultLayoutContextProps = {
    screenHeaderTitle: "Title",
    setTitle: (string:string)=>{}
}

export const DefaultLayoutContext =  createContext<DefaultLayoutContextProps>(defaultProps);

export function DefaultLayoutContextProvider(props:{children:React.ReactNode}){
    const [screenHeaderTitle,setScreenHeaderTitle] = useState<string>("Title");

    const setTitle = (string:string)=>{
        setScreenHeaderTitle(string);
    }

    return (
        <DefaultLayoutContext.Provider value={{screenHeaderTitle,setTitle}}>
            {props.children}
        </DefaultLayoutContext.Provider>
    )
}
