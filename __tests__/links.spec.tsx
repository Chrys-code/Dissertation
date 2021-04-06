import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Signup from '../pages/signup/index';
import { shallow, mount } from 'enzyme';
import style from "../styles/links_style.module.scss";

//////////////////
// UI TESTS
//////////////////

// Snapshots
describe('signin snapshot', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Signup />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});

// Identifying components on the page
describe('links page elements', () => {
    it('should find container element to be on the page', () => {
        const wrapper = shallow(<Signup />);
        // Page Container
        expect(wrapper.find(<div className={style.container}></div >)).toBeTruthy();
    });

    it('should find the link component on the page', () => {
        const wrapper = mount(<Signup />);
        // Prespad containing logo
        expect(wrapper.find(
            <div className={style.link}>
                <div className={style.icon}>
                    <img src="/images/globe.svg" alt="globe.svg" />
                </div>
                <div>
                    <h2>W3 schools</h2>
                    <p>test link description</p>
                </div>
            </div>
        )).toBeTruthy();
    });

    it('should find the button component on the page', () => {
        const wrapper = shallow(<Signup />);
        // Prespad containing logo
        expect(wrapper.find(
            <button className="links_style_btn__319Rn">Add</button>
        )).toBeTruthy();
    });

});

