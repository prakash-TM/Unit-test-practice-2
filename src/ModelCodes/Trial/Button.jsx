import React from 'react';
import { useState } from "react"

const ButtonView = ({text}) => {
    const [state, setState] = useState("")

    return (
        <>
        <p data-testId="label">{state}</p>
        <button onClick={()=>{setState('Proceed Now')}}>{state || text}</button>
        </>
    );
}

export default ButtonView;