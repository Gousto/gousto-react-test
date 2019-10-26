import initialState from './initial-state';
import {productActions} from "../actions/productActions";

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



export const productSelector = (state) => {
    if(state.selectedCategory) {
        return {
            ...state.products.data,
            data: state.products.data.data.filter(product => product.categories.some(category => category.id === state.selectedCategory))
        }
    }
    return state.products.data;
};