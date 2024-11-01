
import "./registration.css";
import { useState } from "react";

export const RegistrationReact = () => {

    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNumber : "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            

            <form onSubmit={handleFormSubmit}>
                <div className="mainDiv">

                    <div className="mb-8">
                        <h1 className="text-center">React Advanced</h1>
                        <h1 className="text-center">Sign Up</h1>
                        <p className="text-center">Please fill in this form to create an account.</p>
                        <p className="text-center"> <b>Summary : </b> My name is <b className="text-orange-500">{user.firstName} {user.lastName}</b>.
                        Phone Number is <b className="text-orange-500">{user.phoneNumber}</b>, Email is <b className="text-orange-500"> {user.email} </b> 
                        and Password is  <b className="text-orange-500"> {user.password} </b>  </p>
                    </div>

                    <label htmlFor="firstName">
                        <b className="ml-1">First Name</b>
                    </label>
                    <input type="text" name="firstName" placeholder="Enter First Name" required value={user.firstName} onChange={handleInputChange} />

                    <label htmlFor="lastName">
                        <b className="ml-1">Last Name</b>
                    </label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required value={user.lastName} onChange={handleInputChange} />

                    <label htmlFor="email">
                        <b className="ml-1">Email Address</b>
                    </label>
                    <input type="email" name="email" placeholder="Enter Email Address" required value={user.email} onChange={handleInputChange} />

                    <label htmlFor="password">
                        <b className="ml-1">Password</b>
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" required value={user.password} onChange={handleInputChange} />

                    <label htmlFor="phoneNumber">
                        <b className="ml-1">Phone Number</b>
                    </label>
                    <input type="text" name="phoneNumber" placeholder="Enter Phone Number" required value={user.phoneNumber} onChange={handleInputChange} />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                        Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn"> Sign Up </button>
                    </div>
                </div>
            </form>

        </>
    )
}