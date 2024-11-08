

import "./registration.css";
import { useState } from "react";

export const LoginForm = () => {

    const[user, setUser] = useState({
        username : "",
        password : ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]:value}));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <div className="mainDiv">
            <div className="card">
                <h1>Login Form</h1>
                <p>Username : <b className="text-orange-500">{ user.username }</b> and Password : <b className="text-orange-500">{ user.password }</b></p>
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputChange}
                />

                <button className="btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

