import React from 'react'
import { shallow } from 'enzyme'
import {UnconnectedProductContainer} from "./ProductContainer";

describe('ProductContainer', () => {
    const fetchProducts = jest.fn();
    const setProductSearchTerm = jest.fn();

    let wrapper;
    let products = {
        data: [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    };

    beforeEach(() => {
        wrapper = shallow(<UnconnectedProductContainer
            products={products}
            fetchProducts={fetchProducts}
            setProductSearchTerm={setProductSearchTerm}
        />)
    });

    test('renders without crashing', () => {
        wrapper
    });

    test('fetches products', () => {
        expect(fetchProducts).toHaveBeenCalled();
    });

    test('renders products in list', () => {
        const productOne = wrapper.find('[data-test="product-1"]');
        expect(productOne.length).toBe(1);
        expect(productOne.first().key()).toBe('1');

        const productTwo = wrapper.find('[data-test="product-2"]');
        expect(productTwo.length).toBe(1);
        expect(productTwo.first().key()).toBe('2');

    });


    test('search term button sets search term', () => {

        const searchButton = wrapper.find('[data-test="search-button"]');
        expect(searchButton.length).toBe(1);

        expect(setProductSearchTerm).not.toHaveBeenCalled();

        searchButton.simulate('click');

        expect(setProductSearchTerm).toHaveBeenCalledWith('');
    });

});
