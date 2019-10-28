import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer, {searchTermReducer} from "./productReducer";
import selectedCategoryReducer from "./selectedCategoryReducer";

export default combineReducers({
  categories: categoryReducer,
  products: productReducer,
  selectedCategory: selectedCategoryReducer,
  searchTerm: searchTermReducer
})
