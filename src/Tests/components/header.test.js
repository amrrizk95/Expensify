import React from 'react';
import Header from '../../components/Header'
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import {shallow} from 'enzyme';
//configure({ adapter: new Adapter() });
import ReactShallowRenderer from 'react-test-renderer/shallow'


test('should render Header correctly',()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})