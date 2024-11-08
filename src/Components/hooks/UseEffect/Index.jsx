
import { useEffect,useState } from "react";
import "./Index.css";

export const ReactUseEffect = () => {

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('Count Value :', count);
    // }, [count]);

    const [date, setDate] = useState(0);
    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        },1000);
    }, [date]);
   
    return (
        // <div className="container effect-container">
        //     <h1 className="text-yellow-500">Hello, UseEffect Hook</h1>
        //     <p>Count: {count} </p>
        //     <button onClick={() => setCount(count + 1)}>Increment</button>
        // </div>

        <div className="container effect-container">
            <h1 className="text-yellow-500">Hello, UseEffect Hook</h1>
            <p className="text-4xl text-yellow-600 font-bold">Date: {date} </p>
        </div>
    )
}