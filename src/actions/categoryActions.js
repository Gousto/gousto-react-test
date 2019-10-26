import {asyncActionTypes} from './async-action-types';

const FETCH_CATEGORIES_ACTION_TYPES = asyncActionTypes('FETCH_CATEGORIES');

const fetchCategories = () => dispatch => {
    dispatch({
        type: 'API',
        payload: {
            route: 'categories',
            ...FETCH_CATEGORIES_ACTION_TYPES
        }

    })
};

export const categoryActions = {
    fetchCategories,
    types: FETCH_CATEGORIES_ACTION_TYPES
};

