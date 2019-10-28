import initialState from '../redux/initial-state';
import {categoryActions} from '../actions/categoryActions';

export default (state = initialState.selectedCategory, action) => {
    switch (action.type) {
        case categoryActions.types.SET_SELECTED_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}

export const selectedCategorySelector = (state) => state.selectedCategory;