import React from 'react';
import {Switch, Route} from 'react-router-dom';

//import Home from './components/Home';
//import Singup from './Singup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    </main>
);

export default Main;