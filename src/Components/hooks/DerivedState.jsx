import { useState } from "react";
// const user = [
    
// ];

export const DerivedState = () => {

    const [user, setUser] = useState([
        {name: "Nahid Hasan", age: 24},
        {name: "Md Khalek", age: 24},
        {name: "Md Malek", age: 24},
        {name: "AB Rahim", age: 24},
    ])

    return (
        <div className="m-10">
            <h1 className="text-3xl">User List</h1>
            <ul>
                {user.map((curElem, index) => {
                    return (
                        <li key={index}>
                            {curElem.name} - {curElem.age} years old.
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}