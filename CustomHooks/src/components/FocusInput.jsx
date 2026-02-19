
import React, { useRef, useEffect } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <h2>Search Box</h2>
            <input 
                ref={inputRef}
                type="text"
                placeholder="I am already focused"
                style={{padding : "10px", fontSize : "16px", width: "300px"}}
            />
        </div>
    );
}

export default FocusInput;