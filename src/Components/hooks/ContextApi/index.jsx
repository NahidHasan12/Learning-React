import { createContext } from "react";

// step - 1
export const BioContext = createContext();

// step - 2
export const BioProvider = ({children}) => {
    const myName = "Nahid Hasan";
    const myAge = 24;
    return <BioContext.Provider value={{ myName,myAge }}> {children} </BioContext.Provider>
}