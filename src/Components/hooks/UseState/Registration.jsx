
import "./registration.css";
import { useState } from "react";

export const Registration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch(name){
            case "firstName":
                setFirstName(value)
                break;
            case "lastName":
                setLastName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            case "phone":
                setPhoneNumber(value)
                break;
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = { firstName, lastName, email, password, phoneNumber }
        console.log(formData);
    }

    return (
        <>
            

            <form onSubmit={handleFormSubmit}>
                <div className="mainDiv">

                    <div className="mb-8">
                        <h1 className="text-center">React Normal</h1>
                        <h1 className="text-center">Sign Up</h1>
                        <p className="text-center">Please fill in this form to create an account.</p>
                        <p className="text-center"> <b>Summary : </b> My name is <b className="text-orange-500">{firstName} {lastName}</b>.
                        Phone Number is <b className="text-orange-500">{phoneNumber}</b>, Email is <b className="text-orange-500"> {email} </b> 
                        and Password is  <b className="text-orange-500"> {password} </b>  </p>
                    </div>

                    <label htmlFor="firstName">
                        <b className="ml-1">First Name</b>
                    </label>
                    <input type="text" name="firstName" placeholder="Enter First Name" required value={firstName} onChange={handleInputChange} />

                    <label htmlFor="lastName">
                        <b className="ml-1">Last Name</b>
                    </label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required value={lastName} onChange={handleInputChange} />

                    <label htmlFor="email">
                        <b className="ml-1">Email Address</b>
                    </label>
                    <input type="email" name="email" placeholder="Enter Email Address" required value={email} onChange={handleInputChange} />

                    <label htmlFor="password">
                        <b className="ml-1">Password</b>
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" required value={password} onChange={handleInputChange} />

                    <label htmlFor="phone">
                        <b className="ml-1">Phone Number</b>
                    </label>
                    <input type="text" name="phone" placeholder="Enter Phone Number" required value={phoneNumber} onChange={handleInputChange} />

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