import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './components/Menu.js'
import './App.css'
import ProductContainer from "./components/ProductContainer";

const App = () => (
  <div className="appContainer">
    {/*<Route exact path="/" component={Menu} />*/}
    <Menu/>
    <ProductContainer/>
  </div>
);

export default App
