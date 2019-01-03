import React from 'react';
import Root from '../containers/Root';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('index', () => {
    it('Renderizando Root', () => {
        const wrapper = shallow(<Root />);
        expect(wrapper.exists()).toBe(true);
    })
    it('Testando interface com snapshots', () => {
        const tree = renderer.create(<Root />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})