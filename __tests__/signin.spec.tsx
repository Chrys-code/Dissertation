import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Signin from '../pages/signin/index';
import { shallow, mount } from 'enzyme';
import style from "../styles/signin_style.module.scss";

//////////////////
// UI TESTS
//////////////////

// Snapshots
describe('signin snapshot', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Signin />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});

// Identifying components on the page
describe('signin page elements', () => {
    it('should find container element to be on the page', () => {
        const wrapper = shallow(<Signin />);
        // Page Container
        expect(wrapper.find(<div className={style.container}></div >)).toBeTruthy();
    });

    it('should find the logo on a prespad', () => {
        const wrapper = shallow(<Signin />);
        // Prespad containing logo
        expect(wrapper.find(
            <div className={style.prespad}>
                <img src="/images/Iconlogo.svg" alt="logo.svg" />
                ::after
            </div>
        )).toBeTruthy();
    });


    it('should find the form and its inputs', () => {
        const wrapper = mount(<Signin />);
        // Page form
        expect(wrapper.find(`form`)).toBeDefined();
        const form = wrapper.find('form');

        // InputField component for Email
        expect(
            form.containsMatchingElement(
                <div className={style.input_line}>
                    <input type="text" placeholder="Email" autoComplete="off" />
                </div>
            )
        ).toBeTruthy()
        // InputField component's icon for Email
        expect(
            form.containsMatchingElement(
                <div className={style.icon}>
                    <img src="/images/lock_mail.svg" alt={"Email"} />
                </div>
            )
        ).toBeTruthy()


        // InputField component for Password
        expect(
            form.containsMatchingElement(
                <div className={style.input_line}>
                    <input type="password" placeholder="Password" autoComplete="off" />
                </div>
            )
        ).toBeTruthy()
        // InputField component's icon for Password
        expect(
            form.containsMatchingElement(
                <div className={style.icon}>
                    <img src="/images/lock_password.svg" alt={"Password"} />
                </div>
            )
        ).toBeTruthy()

        // Signup button
        expect(
            form.containsMatchingElement(
                <button className={style.btn}>Sign In</button>
            )
        ).toBeTruthy()
        // Signup button text content
        expect(wrapper.find('button').text()).toEqual('Sign In')

        // Signin Link outside of Form
        expect(
            wrapper.containsMatchingElement(
                <a href="/signup"><p className={style.link}>Sign Up</p></a>
            )
        ).toBeTruthy()
        // Signup button text content
        expect(wrapper.find('a p').text()).toEqual('Sign Up')
    })
});


//////////////////
// FUNCTION TESTS
//////////////////

test('true is truthy', () => {
    expect(true).toBe(true);
});

test('false is falsy', () => {
    expect(false).toBe(false);
});
