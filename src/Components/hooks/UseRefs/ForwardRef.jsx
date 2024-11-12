import { forwardRef,useRef } from "react";
import { v4 as userId } from 'uuid';
import PropTypes from 'prop-types';

export const ForwardRef = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <BeforReact19Input label="username" ref={username}  />
            <BeforReact19Input label="password" ref={password} />
            <button className="p-3 bg-black text-white text-3xl mt-5">Login</button>
        </form>
    )
}

// Before Version 19 
// const BeforReact19Input = forwardRef((props, ref) => {
//     const id = userId();
//     return (
//         <div>
//             <label htmlFor={id}> {props.label} </label> <br />
//             <input type="text" ref={ref} className="w-[200px] h-[30px] border p-2 text-3xl text-orange-600 font-bold bg-black" /> <br />
            
//         </div>
//     );
// });

// after version 10 
const BeforReact19Input = ({label, ref}) => {
    const id = userId();
    return (
        <div>
            <label htmlFor={id}> {label} </label> <br />
            <input type="text" ref={ref} className="w-[200px] h-[30px] border p-2 text-3xl text-orange-600 font-bold bg-black" /> <br />
            
        </div>
    );
};


// validation
BeforReact19Input.propTypes = {
    label: PropTypes.string.isRequired,
    ref: PropTypes.string.isRequired
};

BeforReact19Input.displayName = 'BeforReact19Input';