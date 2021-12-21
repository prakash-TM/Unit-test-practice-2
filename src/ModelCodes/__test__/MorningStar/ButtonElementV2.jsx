import React from 'react';
import ButtonElementV2 from '../../MorningStar/ButtonElementv2';
import { create } from 'react-test-renderer';

describe('Button loading correctly', () => {
  test('Button loading correctly', () => {
    const button = create(<ButtonElementV2 />);
    //console.log(button);

    expect(button.toJSON()).toBeTruthy();
  });

  test('Button should be having label prop', ()=>{
    const button = create(<ButtonElementV2 name="Ashwary" label="Click me"/>);

    const {root } = button;
    const {props} = root

    expect(props).not.toEqual({});
    expect(props.label).toBeTruthy();
    expect(button.toJSON()).toMatchSnapshot();
  })
});

describe('On Click actions"', ()=>{
    test('Change button label on click to "changed',()=>{
        
    const button = create(<ButtonElementV2 />);
    })
})