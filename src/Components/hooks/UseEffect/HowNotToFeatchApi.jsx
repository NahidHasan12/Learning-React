
import { useState, useEffect } from "react";
import "./Pokemon.css";


export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        .then((data)=>{
            setApiData(data);
        }).catch((error) => console.log(error));
    },[]);

    return (
        <div className="container effect-container">
            <ul>
                <p className="text-3xl text-orange-500">Data : </p>
                {apiData.map((curData) => {
                    return <li key={curData.id}>{ curData.title }</li>
                })}
            </ul>
        </div>
    )
}