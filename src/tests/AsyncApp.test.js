import React from 'react';
import {AsyncApp, mapStateToProps} from '../containers/AsyncApp';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('index', () => {
    it('Renderizando AsyncApp', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<AsyncApp selectedSubreddit='' posts={[]} isFetching='' dispatch={mockFn} value=''/>);
        expect(wrapper.exists()).toBe(true);
    })
    it('MapStateToProps()', () => {
        const initialState={
            selectedSubreddit:'caio',
            postsBySubReddit:{
                selectedSubreddit:'caio',
                posts:[],
                isFetching:true
            }
        }
        expect(mapStateToProps(initialState)).toBe();
    })
    it('Testando interface com snapshots', () => {
        const mockFn = jest.fn();
        const tree = renderer.create(<AsyncApp selectedSubreddit='' posts={[]} isFetching='' dispatch={mockFn} value=''/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})