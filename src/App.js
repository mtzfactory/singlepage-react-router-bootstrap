import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
import { BrowserRouter, Router, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Contact from './components/Contact'
import About from './components/About'
import HeaderNav from './components/HeaderNav'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <HeaderNav/>
                    <Route exact path="/" component={ Homepage }/>
                    <Route path="/contact" component={ Contact }/>
                    <Route path="/about" component={ About }/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
