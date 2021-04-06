import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Form from '../pages/form/index';
import { shallow, mount } from 'enzyme';
import style from "../styles/form_style.module.scss";

//////////////////
// UI TESTS
//////////////////

// Snapshots
describe('signin snapshot', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Form />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
});

// Identifying components on the page
describe('links page elements', () => {
    it('should find container element to be on the page', () => {
        const wrapper = shallow(<Form />);
        // Page Container
        expect(wrapper.find(<div className={style.container}></div >)).toBeTruthy();
    });

    it('should find the input fields on the page', () => {
        const wrapper = mount(<Form />);

        expect(wrapper.find(
            <div className={style.input_field}>
                <label htmlFor="transport"><p>Transport name, number:</p></label>
                <div className={style.input_line}><input type="text" name="transport" placeholder="Transport" autoComplete="off" />
                </div>
                <div className={style.icon}>
                    <img src="/images/lock_mail.svg" alt="Transport" />
                </div>
            </div>
        )).toBeTruthy();

        expect(wrapper.find(
            <div className={style.input_field}>
                <label htmlFor="departure"><p>Departure location &amp; time:</p></label>
                <div className={style.input_line}>
                    <input type="text" name="departure" placeholder="Departure location" autoComplete="off" />
                </div>
                <div className={style.icon}>
                    <img src="/images/lock_mail.svg" alt="Departure location" />
                </div>
            </div>
        )).toBeTruthy();

        expect(wrapper.find(
            <div className={style.input_field}>
                <label htmlFor="arrival"><p>Arrival location &amp; time:</p></label>
                <div className={style.input_line}>
                    <input type="text" name="arrival" placeholder="Arrival location" autoComplete="off" />
                </div>
                <div className={style.icon}>
                    <img src="/images/lock_mail.svg" alt="Arrival location" />
                </div>
            </div>
        )).toBeTruthy();

    });


    it('should find the dropdowns on the page', () => {
        const wrapper = mount(<Form />);
        // Prespad containing logo
        expect(wrapper.find(
            <div className={style.inline_container}>
                <select className={style.dropdown}>
                    <option value="Year">Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
                <select className={style.dropdown}>
                    <option value="Month">Month</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select className={style.dropdown}>
                    <option value="Day">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        )).toBeTruthy();
    });

    it('should find the button on the page', () => {
        const wrapper = shallow(<Form />);
        // Radio buttons
        expect(wrapper.find(
            <div className={style.inline_container}>
                <div>Yes:  <input type="radio" name="children" value="true" /></div>
                <div>No:  <input type="radio" name="children" value="false" /></div>
            </div>
        )).toBeTruthy();

        // Save button
        expect(wrapper.find(
            <button className={style.btn}>Save</button>
        )).toBeTruthy();
    });

});

