import { useEffect, useState } from "react";
import "./Index";

export const EffectChallange = () => {

    const [count, setCount] = useState(0);
    const [ name, setName] = useState("name");

    useEffect(() => {
        document.title = `Count : ${count}`;
    },[count]);

    useEffect(() => {
        console.log(name);
    },[name]);

    return (
        <div className="container effect-container">
        <h1 className="text-yellow-500">Hello, UseEffect Hook</h1>
        <p> Count: <span> {count} </span> </p>
        <button onClick={() => setCount(count + 1)}> Increment </button>

        <p> Name : <span> {name} </span> </p>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}