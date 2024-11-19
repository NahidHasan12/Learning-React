import { useRef, memo } from "react";

const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);

    return (
        <div>
            <p>
                Nothing Cheange here  but  Ive now rendered:
                <span className="text-red-600">{ renderCount.current++ }</span>
            </p>
        </div>
    )
}

export default memo(Counts);