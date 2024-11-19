import { useState } from "react"
import Counts from "./memoCount"

export const ReactMemo = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>{ count }</h1>
                <button className="p-3 text-white text-3xl bg-green-600" onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            </div>
            <Counts />
        </>
    )
    
}