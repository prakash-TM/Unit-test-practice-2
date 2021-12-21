import { useState } from "react"

const Btn1=(props)=>{
const[btnlab,setBtnlab]=useState("")
    
    return(
        <>
        <button data-testId="btn1" onClick={()=>{setBtnlab("After Click")}}>{btnlab || props.btn1lap}</button>
        </>
    )
}
export default Btn1