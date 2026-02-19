import { useState, useEffect, useRef } from "react";

function PreviousValue() {
    const [name, setName] = useState("");
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
    });

    return (
        <div>
            <h2>
                Track Previous Value
            </h2>
         <input 
         type="text" 
         value={name}
         onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{padding:"8px", fontSize:"16px"}}
         />
         <p>Current : <strong>{name}</strong></p>
         <p>Previous : <strong>{prevName.current}</strong></p>
        </div>

    );
}

export default PreviousValue;