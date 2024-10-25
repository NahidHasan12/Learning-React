
import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }

    const checkOn = isOn ? "on" : "off";
    const toggleBGColor = isOn ? "#4caf50" : "#f44336";

    return (
       <>
       <h1>Toggle Switch <IoIosSwitch style={{ color: toggleBGColor }} />  <FaUserGraduate style={{ color: toggleBGColor }} />  </h1>
      
       <div className="toggle-switch" style={{ backgroundColor: toggleBGColor }} onClick={handleToggleSwitch}>
          
           <div className={`switch ${checkOn}`}>
               <span className="switch-state"> {checkOn} </span>
           </div>
       </div>
       </>
    )
}