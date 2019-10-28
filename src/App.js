import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './Menu.js'
import './App.css'
import ProductContainer from "./ProductContainer";

const App = () => (
  <div className="appContainer">
    {/*<Route exact path="/" component={Menu} />*/}
    <Menu/>
    <ProductContainer/>
  </div>
);

export default App
