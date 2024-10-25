

export const EventPropagation = () => {
    
    const handleGrandParent = () => {
        console.log("Grand Parent Clicked");
    }

    const handleParentClick = () => {
        console.log("Parent Clicked");
    }

    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("Child Clicked");
    }

    return (
        <section>
            <div className="bg-slate-500 p-10 mx-auto" onClick={handleGrandParent}>
                <div className="bg-slate-800 p-10 mx-auto" onClick={handleParentClick}>
                    <button className="p-5 bg-black text-3xl text-white" onClick={handleChildClick}>
                        Click Div
                    </button>
                </div>
            </div>
        </section>
    )
}