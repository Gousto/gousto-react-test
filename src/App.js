import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './Menu.js'
import './App.css'

const App = () => (
  <div className="appContainer">
    {/*<Route exact path="/" component={Menu} />*/}
    <Menu/>
  </div>
);

export default App
