import React from 'react';

const ButtonElement = (props)=>{

    return (
        <>
        <p title="Para tab">My name is {props.label}</p>
        <button title="This is a new button" onClick={()=>{console.log('message')}}>{props.label}</button>
        </>
    )
}

export default ButtonElement