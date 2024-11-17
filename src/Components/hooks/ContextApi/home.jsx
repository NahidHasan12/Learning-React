import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {
    const {myName, myAge} = useContext(BioContext);
    return (
        <>
        <h1>hello, Context API</h1>
        <h1>My name is {myName} and i am {myAge} years old </h1>
        </>
    )
}