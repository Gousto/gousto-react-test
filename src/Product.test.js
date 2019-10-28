import React from 'react'
import { shallow } from 'enzyme'
import {Product} from "./Product";

describe('Product', () => {

    test('displays description when expanded', () => {

        const wrapper = shallow(<Product expanded={true} product={{}}/>);

        const paragraph = wrapper.find('[data-test="product-description"]');
        expect(paragraph.length).toBe(1);
    });

    test('does not display description when not expanded', () => {

        const wrapper = shallow(<Product expanded={false} product={{}}/>);

        const paragraph = wrapper.find('[data-test="product-description"]');
        expect(paragraph.length).toBe(0);
    });
});