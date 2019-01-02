import React from 'react';
import Picker from '../components/Picker';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('index', () => {
    it('Renderizando index', () => {
        const wrapper = shallow(<Picker value='' options={[]} />);
        expect(wrapper.exists()).toBe(true);
    })
    it('Testando interface com snapshots', () => {
        const tree = renderer.create(<Picker value='' options={[]} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
    it('Testando método onChange utilizando uma mock', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<Picker value='' options={[]} />);
        wrapper.find('select').simulate('change',{target:{value:'bar'}});
        expect(mockFn).toBeCalled();
    })
})
