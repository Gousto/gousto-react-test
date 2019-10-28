import initialState from '../redux/initial-state';
import { createSelector } from 'reselect'
import {productActions} from "../actions/productActions";
import {selectedCategorySelector} from "./selectedCategoryReducer";

export default (productsState = initialState.products, action) => {
        switch (action.type) {
            case productActions.types.PENDING:
                return {
                    ...productsState,
                    isFetching: true,
                };
            case productActions.types.SUCCESS:
                return {
                    isFetching: false,
                    data: action.payload
                };
            default:
                return productsState
        }
}

const productSelector = (state) => state.products.data;

export const productByCategorySelector = createSelector(
    productSelector,
    selectedCategorySelector,
    (products, selectedCategory) => {
    if(selectedCategory) {
        return {
            ...products,
            data: products.data.filter(product => product.categories.some(category => category.id === selectedCategory))
        }
    }
    return products;
    }
);

export const searchTermReducer = (searchTermState = initialState.searchTerm, action) =>{
    switch(action.type){
        case productActions.types.SET_PRODUCT_SEARCH_TERM:
            return action.payload;
        default:
            return searchTermState;
    }
};

const searchTermSelector = (state) => state.searchTerm;

export const productsByCategoryAndSearchTerm = createSelector(
    productByCategorySelector,
    searchTermSelector,
    (productsByCategory, searchTerm) => {
        if(searchTerm){
            return {
                ...productsByCategory,
                data: productsByCategory.data.filter(product => product.title.includes(searchTerm))
            }
        }
        return productsByCategory;
    }
);
