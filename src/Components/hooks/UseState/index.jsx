
import { useState } from "react";
import "../Hooks.css";
export const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        console.log("Inner", count);
    }
    console.log("Outer", count);

    return(
        <div className="container state-container border" style={{ textAlign: "center" }}>
            <h1 className="text-red-700">useState Hook !</h1>
            <br />
            <h2 className="text-8xl my-3 text-pretty font-bold"> {count} </h2>
            <button className="text-3xl p-5 m-1 bg-blue-500 text-white" onClick={handleIncrement}>Increment</button>
            {/* <button className="text-3xl p-5 m-1 bg-red-900 text-white" onClick={() => setCount(count + 1)}>Increment</button> */}
            <button className="text-3xl p-5 m-1 bg-orange-600 text-white" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="text-3xl p-5 m-1 bg-red-600 text-white" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}