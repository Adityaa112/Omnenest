import { useReducer } from "react"; 
import { counterReducer, ACTIONS } from "../reducers/counterReducer";

function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h2>Counter</h2>
            <p style={{fontSize: "24px", fontWeight: "bold"}}>{count}</p>
            <div>
                <button onClick={() => dispatch({type: ACTIONS.INCREMENT})} style={{padding: "10px 20px", fontSize: "16px", marginRight: "10px"}}>
                    +
                </button>
                <button onClick={() => dispatch({type: ACTIONS.DECREMENT})} style={{padding: "10px 20px", fontSize: "16px", marginRight: "10px"}}>
                    -
                </button>
                <button onClick={() => dispatch({type: ACTIONS.RESET})} style={{padding: "10px 20px", fontSize: "16px"}}>
                    Reset
                </button>
            </div>
             </div>
    );
}

export default Counter;