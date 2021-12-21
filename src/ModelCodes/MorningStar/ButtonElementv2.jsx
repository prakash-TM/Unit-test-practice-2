import React, { useState } from 'react';

const ButtonElementV2 = ({label})=>{

    const [btnLabel, setBtnLabel] = useState("")

    return (
        <>
        <p data-testId="p1" title="Para tab">My name is {btnLabel || label}</p>
        <button title="This is a new button" onClick={()=>{setBtnLabel('changed')}}>{btnLabel || label}</button>
        </>
    )
}

export default ButtonElementV2