
import { UseBioContext } from '.';

export const Home = () => {
    const {myName, myAge} = UseBioContext();
    return (
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center`}>
        <h1>hello, Context API</h1>
        <h1>My name is {myName} and i am {myAge} years old </h1>
        </section>
    )
}