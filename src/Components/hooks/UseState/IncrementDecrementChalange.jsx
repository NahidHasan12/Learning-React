import { useState } from "react"

export const CounterChalange = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);
    const [onClickColorChange, setOnClickColorChange] = useState("");

    const handleIncrement = () => {
        setCount(count + step);
        setOnClickColorChange("blue-600");
    }
    const handleDecrement = () => {
        setCount(count - step);
        setOnClickColorChange("orange-600");
    }
    const handleReset = () => {
        setCount(0);
        // setStep(0);  // Optional: reset step too
        setOnClickColorChange("red-800");  // Reset color
    }

    return(
        <div className="border" style={{ textAlign: "center" }}>
            <h1 className="text-red-800">useState Counter Chalange ! </h1>

            <p className={`text-8xl font-bold my-4 text-${onClickColorChange ? onClickColorChange : "pretty"}`}> { count } </p>

            <div className="my-5">
                <label> Step  
                    <input value={step} onChange={(e) => setStep(Number(e.target.value))}  className="border text-pretty w-[250px] h-[40px] mx-2 p-2 text-4xl font-bold outline-none" type="number" />
                </label>
            </div>

            <div>
                <button disabled={count >= 100} onClick={handleIncrement} className="text-3xl p-5 m-1 bg-blue-600 text-white font-bold">Increment</button>
                <button disabled={count <= 0} onClick={handleDecrement} className="text-3xl p-5 m-1 bg-orange-600 text-white font-bold">Decrement</button>
                <button onClick={handleReset} className="text-3xl p-5 m-1 bg-red-800 text-white font-bold">Reset</button>
            </div>

        </div>
    )
}