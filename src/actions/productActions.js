import {asyncActionTypes} from './async-action-types';

const FETCH_PRODUCTS_ACTION_TYPES = asyncActionTypes('FETCH_PRODUCTS');
const SET_PRODUCT_SEARCH_TERM = 'SET_PRODUCT_SEARCH_TERM';

const fetchProducts = () => dispatch => {
    dispatch({
        type: 'API',
        payload: {
            route: 'products',
            ...FETCH_PRODUCTS_ACTION_TYPES
        }
    })
};

const setProductSearchTerm = (text) => dispatch => {
    dispatch({
        type: SET_PRODUCT_SEARCH_TERM,
        payload: text
    })
};

export const productActions = {
    fetchProducts,
    setProductSearchTerm,
    types: {
        SET_PRODUCT_SEARCH_TERM,
        ...FETCH_PRODUCTS_ACTION_TYPES
    }
};

