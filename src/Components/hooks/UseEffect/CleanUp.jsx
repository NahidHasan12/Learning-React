
import { useEffect, useState } from "react";
import "./Index";

export const CleanUp = () => {

    const [count, setCount] = useState(0);
    const [intervalSpeed, setIntervalSpeed] = useState(1500);

    // setInterval(() => {
    //     // setCount(count + 1);
    //     setCount((prev) => prev + 1);
    // },1000);

    useEffect(() => {

        const timer = setInterval(() => {
            // setCount(count + 1);
            setCount((prev) => prev + 1);
        },intervalSpeed);

        return () => clearInterval(timer);

    },[intervalSpeed]);

    const handleSpeed = () => setIntervalSpeed(100);
    const handleResetSpeed = () => setIntervalSpeed(1500);
    

    return (
        <div className="container">
            <div className="counter">
                <p className="text-3xl text-orange-600 font-bold">My Subscribers on YouTube</p>
                <div className="odometer text-blue-400" id="odometer" onMouseOver={handleSpeed} onMouseLeave={handleResetSpeed}> {count} </div>
                <h3 className="title">Subscribers <br /> Realtime Counter </h3>
            </div>
        </div>
    );
}