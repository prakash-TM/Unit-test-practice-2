import Btn1 from "../components/BtnComp1";
import React from "react";
import {act, create } from "react-test-renderer"


describe("Button 1 check", () => {
    test("btn1 working properly", () =>{ 
        const btn1 = create( < Btn1 / > )
        expect(btn1.root).toBeTruthy()
    })
    
    test("passing props to bt1",()=>{

        const btn1p=create(<Btn1 btn1lap="Before Click" />)
        const {root}=btn1p
        const {props}=root
        console.log("hi",props.btn1lap)
        expect(props.label).not.toBe({})
        expect(props).not.toEqual({})
        expect(root).toBeTruthy()
        expect(btn1p.toJSON()).toMatchSnapshot()
        

    })
})

describe("bt1 Before and after button click",()=>{
     test("Before clicking the btn1",()=>{
         const beforeClick=create(<Btn1 btn1lap="Before Click" />)
         const{root}=beforeClick
         const{props}=root
         const label=props.btn1lap
         expect(label).not.toBe("")
         expect(label).toBe("Before Click")
    })
    

    test("after clicking the btn1",()=>{
        const afterClick=create(<Btn1 />)
        const {root}=afterClick

        // eslint-disable-next-line testing-library/await-async-query
        const buttonInstance=root.findByType("button")
        const {props}=buttonInstance
        act(()=>{props.onClick()})

        console.log("2",props)

       
        // eslint-disable-next-line testing-library/await-async-query
        const textInstance=root.findByProps({"data-testId":"btn1"}) // this line same for line 40 and 41. but this line helps to find the specific btn using id
        console.log("3",textInstance.props)
        const afterClickProp=textInstance.props
        const afterLab=afterClickProp.children
        console.log(afterLab)
        expect(afterLab).not.toBe("")
        expect(afterLab).toBe("After Click")
        
    })
})