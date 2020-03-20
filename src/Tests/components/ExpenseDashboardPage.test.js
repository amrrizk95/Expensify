import React from 'react'
import {ExpenseDashboardPage} from '../../components/ExpenseDashboardPage';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
test('should render dashboard',()=>{
    const wrapper = shallow(<ExpenseDashboardPage  />);
})