import React from 'react'
import {productByCategorySelector, productsByCategoryAndSearchTerm} from "./productReducer";

const productOne ={
    id: 1,
    title: 'titleOne',
    categories: [{
        id: 1
    }]
};

const productTwo = {
    id: 2,
    title: 'titleTwo',
    categories: [{
        id: 1
    }]
};

const productThree = {
    id: 3,
    title: 'titleThree',
    categories: [{
        id: 2
    }]
};

const getState = () => ({
    categories: {
        data: {
            data: [
                {
                    id: 1
                },
                {
                    id: 2
                }
             ],
        }
    },
    products: {
        data: {
            data: [
                productOne,
                productTwo,
                productThree
            ]
        }
    },
    selectedCategory: null,
    searchTerm: ''
});

describe('product by category selector', () => {

    test('returns all products if no category selected', () => {
        expect(productByCategorySelector(getState())).toEqual(getState().products.data);
    });

    test('returns only products that match the category selected', () => {
        const state = getState();
        state.selectedCategory = 1;
        expect(productByCategorySelector(state)).toEqual({data: [productOne,productTwo]});
    });
});


describe('product by category and search term selector', () => {

    test('returns products by category if no search term set', () => {
        expect(productsByCategoryAndSearchTerm(getState())).toEqual(getState().products.data);
    });

    test('filters on search term if search term set', () => {
        const state = getState();
        state.searchTerm = 'Three';
        expect(productsByCategoryAndSearchTerm(state)).toEqual({data: [productThree]});
    });
});



