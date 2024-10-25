
export const EventHandling = () => {

    function handleBtnEvent(){
        alert("Hey React, I am from button Event");
    }

    const handleBtnClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey React, I am from Event Handling Component");
    }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome`);
    }

    return (
        <>
            <button className="p-5 bg-slate-500 text-white text-2xl m-1" onClick={handleBtnEvent}>Click Me</button>
            {/* functions Event Handler  */}
            <button className="p-5 bg-slate-600 text-white text-2xl m-1" onClick={handleBtnClick}>Click Me</button>
            {/* inline event Handler  */}
            <button className="p-5 bg-slate-700 text-white text-2xl m-1" onClick={(event)=>console.log(event)}>Click Me & check console</button>
            {/* Functions components with inline arrow function  */}
            <button className="p-5 bg-slate-900 text-white text-2xl m-1" onClick={()=>alert("Hey React, i am inline arrow function")}>Click Me</button>
            {/* Event with Function argument */}
            <button className="p-5 bg-slate-900 text-white text-2xl m-1" onClick={()=> handleWelcomeUser("Nahid")}>Click Me</button>
        </>
    )
}