import React, { useState } from "react"; // Importing useState

export default function WrongCounter() {
    const [val, setVal] = useState(0); // Using useState instead of a variable

    return (
        <>
            <h1>Counter: {val}</h1>
            <button onClick={() => {
                setVal(val + 1); // Updating state instead of variable
                alert("Added! " + (val + 1)); // Alerting updated value
            }}>Add</button>
        </>
    );
}

