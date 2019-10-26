import {asyncActionTypes} from './async-action-types';

const FETCH_CATEGORIES_ACTION_TYPES = asyncActionTypes('FETCH_CATEGORIES');
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

const fetchCategories = () => dispatch => {
    dispatch({
        type: 'API',
        payload: {
            route: 'categories',
            ...FETCH_CATEGORIES_ACTION_TYPES
        }

    })
};

const setSelectedCategory = (id) => dispatch => {
    dispatch({
        type: SET_SELECTED_CATEGORY,
        payload: id
    })
};

export const categoryActions = {
    fetchCategories,
    setSelectedCategory,
    types: {
        SET_SELECTED_CATEGORY,
        ...FETCH_CATEGORIES_ACTION_TYPES,
    }
};

