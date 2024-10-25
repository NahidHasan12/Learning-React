import { useState } from "react";

export const State = () => {
    
    //     let  value = 0;
    //    const handleButtonClick = () => {
    //         value++;
    //         console.log(value);
    //     }

    // console.log(useState());
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1 );
    }

    return (
        <>
            <div>
                <h1>{ count }</h1>
                <button className="p-5 bg-black text-3xl text-white" onClick={handleButtonClick}>Increment</button>
            </div>
            <ChildComponent />
        </>
    );
}

function ChildComponent(){
    console.log("Child Company")
}