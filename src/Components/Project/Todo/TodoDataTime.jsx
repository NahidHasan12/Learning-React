
import { useEffect, useState } from "react";

export const TodoDateTime = () => {

    const [dateTime, setDateTime] = useState("");
      // Todo date time
      useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
    
            setDateTime (`${formatedDate} - ${formatedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 className="date-time text-blue-700">
            {dateTime}
        </h1>
    )
}