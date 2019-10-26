import { combineReducers } from 'redux'
import menu from './menu'
import productReducer from "./productReducer";

export default combineReducers({
  categories: menu,
  products: productReducer
})
