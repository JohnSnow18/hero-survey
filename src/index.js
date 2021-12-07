import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* import Contact from './components/Screen/Contact';
import Sesion from './components/Screen/Sesion';
import Layout from './components/Layout/Layout'
import HomeContainer from './components/containers/HomeContainer';
import Home from './components/Screen/Home';
import Register from './components/Screen/Register'; */

import Contact from "./Screen/Contact";
import Sesion from "./Screen/Sesion";
import Layout from "./components/Layout/Layout"
import Home from "./Screen/Home";
import Register from "./Screen/Register";





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/sesion">
          <Sesion/>
        </Route>
        
        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>

{/*          <Route exact path="HomeContainer">
            <HomeContainer/>
        </Route> */}
        </Switch>
        
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
/* arbol(a(1,a(2,nil,a(4,nil,nil)),a(3,a(5,nil,nil),a(6,nil,nil))) */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
