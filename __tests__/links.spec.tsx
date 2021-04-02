import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Links from '../pages/links/index';


test('true is truthy', () => {
    expect(true).toBe(true);
});

test('false is falsy', () => {
    expect(false).toBe(false);
});

describe('Index', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Links />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});