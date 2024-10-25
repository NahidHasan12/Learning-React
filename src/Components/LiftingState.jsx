import { useState } from "react";

export const LiftingState = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent inputValue={inputValue} />
        </>
    );
}

const InputComponent = ({inputValue,setInputValue}) => {

    return (
        <>
            <input className="w-[200px] h-[20px] text-3xl mt-10 ml-10 px-2" type="text" placeholder="Enter Your Name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    );
}
const DisplayComponent = ({inputValue}) => {
    return <p className="ml-10">The current input value is : {inputValue}</p>
}