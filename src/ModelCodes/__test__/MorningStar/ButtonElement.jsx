import React from 'react';
import ButtonElement from "../../MorningStar/ButtonElement";
import { create } from 'react-test-renderer';

describe('Button loading correctly', () => {
  test('Button loading correctly', () => {
    const button = create(<ButtonElement />);
    //console.log(button);

    expect(button.toJSON()).toBeTruthy();
  });

  test('Button should be having label prop', ()=>{
    const button = create(<ButtonElement name="Ashwary" label="Click me"/>);

    const {root } = button;
    const {props} = root

    expect(props).not.toEqual({});
    expect(props.label).toBeTruthy();
    expect(button.toJSON()).toMatchSnapshot();
  })
});