import React from 'react';
import { create } from 'react-test-renderer';
import { THEMES } from '../../../Core/Themes';
import Popover from '..';
import { Text } from 'react-native';

describe('Popover component Test', () => {
    it('Renders simple Popover', () => {
        const component = create(
            <Popover visible={true}>
                <Text>Hello</Text>
            </Popover>
        );
        expect(component.toJSON).toMatchSnapshot();
    });
    it('Renders simple Popover in dark theme', () => {
        const darkTheme = THEMES['DARK'];
        const component = create(
            <Popover visible={true} theme={darkTheme}>
                <Text>Hello</Text>
            </Popover>
        );
        expect(component.toJSON).toMatchSnapshot();
    });
    it('Popover is dismiss function', () => {
        const dismiss = jest.fn();
        const component = create(<Popover onDismiss={dismiss} />);
        component.root
            .findByProps({ testID: 'Dismiss Button' })
            .props.onPress();
        expect(dismiss).toBeCalled();
    });
});
