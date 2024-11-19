import { useReducer } from "react"

export const ReducerComp = () => {

    const initialState = {
        count: 0,
        increment: 2,
        decrement: 1
    }

    const reducer = (state, action) => {
        // console.log(state, action);

        // if(action.type === "INCREMENT"){
        //     return state + 1;
        // }
        // if(action.type === "DECREMENT"){
        //     return state - 1;
        // }
        // if(action.type === "RESET"){
        //     return state = 0;
        // }

        switch (action.type) {
            case "INCREMENT":
                return {...state, count: state.count + state.increment};
        
            case "DECREMENT":
                return {...state, count: state.count - state.decrement};
            case "RESET":
                return {...state, count: 0};
        
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(useReducer());
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})} className="text-3xl p-3 m-1 text-white bg-green-600">Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})} className="text-3xl p-3 m-1 text-white bg-orange-600">Decrement</button>
            <button onClick={() => dispatch({type: "RESET"})} className="text-3xl p-3 m-1 text-white bg-red-700">Reset</button>
        </div>
    )
}