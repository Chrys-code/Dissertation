import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Index from '../pages/index';
import { shallow, mount } from 'enzyme';
import style from "../styles/index_style.module.scss";

//////////////////
// UI TESTS
//////////////////

// Snapshots
describe('signin snapshot', () => {
  it('should render without throwing an error', () => {
    const testRenderer = TestRenderer.create(<Index />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

// Identifying components on the page
describe('links page elements', () => {
  it('should find container element to be on the page', () => {
    const wrapper = shallow(<Index />);
    // Page Container
    expect(wrapper.find(<div className={style.container}></div >)).toBeTruthy();
  });

  it('should find the diagrams palce on the page', () => {
    const wrapper = mount(<Index />);
    // Prespad containing logo
    expect(wrapper.find(
      <div className={style.diagram}>
        <div className={style.prespad}>
          <select className={style.dropdown}><option value="Country">Country</option><option value="123">123</option></select>
          <p>We should have an integrated Python plotlib diagram here</p>
        </div>
      </div>
    )).toBeTruthy();
  });

  it('should find the links on the page', () => {
    const wrapper = shallow(<Index />);
    // Prespad containing logo
    expect(wrapper.find(
      <div className={style.prespad}>
        <h2>Locator From</h2>
        <p>Fill a form that is required to cross country border</p>
        <img src="/images/locator.svg" alt="green_backgroun_img" />
      </div>
    )).toBeTruthy();
  });
});

