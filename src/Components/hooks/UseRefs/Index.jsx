
import "./index.css";
import {useRef} from "react";

export const UseRef = () => {

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const username = useRef(null);
    const password = useRef(null);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" placeholder="enter username" ref={username}/> <br />
            <input type="text" id="password" placeholder="enter password" ref={password}/> <br />
            <button className="p-3 bg-black text-white text-3xl mt-5">Login</button>
        </form>
    )
}