import {useId} from "react";
export const USeId = () => {

    // const usernameId = useId();
    // const emailId = useId();
    // const passwordId = useId();
    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={usernameId}> Username: </label>
    //             <input type="text" id={usernameId} name="username" />
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}> Email: </label>
    //             <input type="email" id={emailId} name="email" />
    //         </div>
    //         <div>
    //             <label htmlFor={passwordId}> Password: </label>
    //             <input type="text" id={passwordId} name="password" />
    //         </div>
    //         <button className="p-3 bg-black text-white text-3xl mt-5">Submit</button>
    //     </form>
    // )


    // This lets you avoids calling useId for every sigle element that needs  a uniqued ID 

 
    const id = useId();
    return (
        <form>
            <div>
                <label htmlFor={id + "usernameId"}> Username: </label>
                <input type="text" id={id + "usernameId"} name="username" />
            </div>
            <div>
                <label htmlFor={id + "emailId"}> Email: </label>
                <input type="email" id={id + "usernameId"} name="email" />
            </div>
            <div>
                <label htmlFor={id + "passwordId"}> Password: </label>
                <input type="text" id={id + "usernameId"} name="password" />
            </div>
            <button className="p-3 bg-black text-white text-3xl mt-5">Submit</button>
        </form>
    )




}