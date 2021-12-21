import React from 'react';
import { act, create } from 'react-test-renderer';
import ButtonView from '../../components/Trial/Button';

describe('Buttons Test', () => {
    test('Button Rendering Successfully with prop', () => {
        const render = create( < ButtonView text = "Click Me" / > );

        const instance = render.root;
        console.log(instance.props)

        const { props } = instance;

        expect(props).not.toEqual({});
        expect(props.text).toBeTruthy();
        expect(props.text).toBe('Click Me');
    });

    test("Button is changing it's label on click to 'Proceed Now'", () => {
        const render = create( < ButtonView / > );

        const instance = render.root;
        const buttonInstance = instance.findByType('button');

        act(() => { buttonInstance.props.onClick() })


        const textInstance = instance.findByProps({ "data-testId": 'label' });
        console.log(textInstance.props)

        expect(textInstance.props.children).toBe('Proceed Now');
    });
});