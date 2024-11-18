import { createContext, useContext } from "react";

// step - 1
export const BioContext = createContext();

// step - 2
export const BioProvider = ({children}) => {
    const myName = "Nahid Hasan";
    const myAge = 24;
    console.log(children);
    return <BioContext.Provider value={{ myName : myName,myAge : myAge}}> {children} </BioContext.Provider>
}

// custom hooks
export const UseBioContext = () => {
    const Context = useContext(BioContext);
    if(Context === undefined){
        throw new Error("Componnent must be wrapped with BioProvider");
    }
    return Context;
}