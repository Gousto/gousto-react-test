import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './Menu.js'
import './App.css'
import ProductList from "./ProductList";

const App = () => (
  <div className="appContainer">
    {/*<Route exact path="/" component={Menu} />*/}
    <Menu/>
    <ProductList/>
  </div>
);

export default App
