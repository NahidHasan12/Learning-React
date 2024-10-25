export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert (`Hey, ${user}`);
    };
    const handleHover = () => {
        alert("Hey, Thanks For Hover Me");
    };

    return (
        <>
            <WelcomeUser
                onButtonClick={()=>HandleWelcomeUser("Nahid")}
                onMouseEvent={handleHover}
            />
        </>
    );

};

const WelcomeUser = (props) => {
    const { onButtonClick, onMouseEvent } = props;

    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onButtonClick();
    }

    return (
        <>
            <button className="p-5 bg-slate-900 text-white text-2xl m-1" onClick={onButtonClick}>Click Me</button>
            <button className="p-5 bg-slate-900 text-white text-2xl m-1" onMouseEnter={onMouseEvent}>Hover Me</button>
            <button className="p-5 bg-slate-900 text-white text-2xl m-1" onClick={handleGreeting}>Greeting</button>
        </>
    );
}
