import { combineReducers } from 'redux'
import menu from './menu'
import productReducer, {searchTermReducer} from "./productReducer";
import selectedCategoryReducer from "./selectedCategoryReducer";

export default combineReducers({
  categories: menu,
  products: productReducer,
  selectedCategory: selectedCategoryReducer,
  searchTerm: searchTermReducer
})
