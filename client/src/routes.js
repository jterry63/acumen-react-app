// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import About from './components/about';
import NotFound from './components/notfound';
import Users from './components/users';

import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import Home from './Pages/Home/Home';
import Surveys from './Pages/Surveys/Surveys';
import Test from './Pages/Test/Test';
import Admin from './Pages/Admin/Admin';
import UserSurvey from './Pages/UserSurvey/UserSurvey'


let store = createStore(todoApp)
console.log(store.getState())


const Routes = (props) => (
<Provider store={store}>
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/usersurvey" component={UserSurvey} />
    <Route path="/surveys" component={Surveys} />
    <Route path="/admin" component={Admin} />
    <Route path="/test" component={Test} />
    <Route path="*" component={NotFound} />
  </Router>
</Provider>
);
 
export default Routes;