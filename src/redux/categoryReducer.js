import initialState from './initial-state';
import {categoryActions} from '../actions/categoryActions'

export default (categoriesState = initialState.categories, action) => {
  switch (action.type) {
    case categoryActions.types.PENDING:
      return {
        ...categoriesState,
        isFetching: true,
      };
    case categoryActions.types.SUCCESS:
      return {
        isFetching: false,
        data: action.payload
      };
    default:
      return categoriesState
  }
}

export const categorySelector = (state) => state.categories.data;