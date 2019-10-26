import {asyncActionTypes} from './async-action-types';

const FETCH_PRODUCTS_ACTION_TYPES = asyncActionTypes('FETCH_PRODUCTS');

const fetchProducts = () => dispatch => {
    dispatch({
        type: 'API',
        payload: {
            route: 'products',
            ...FETCH_PRODUCTS_ACTION_TYPES
        }
    })
};

export const actions = {
    fetchProducts,
    types: FETCH_PRODUCTS_ACTION_TYPES
};

