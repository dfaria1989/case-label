import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProtectedRoute from './components/ProtectedRoute'

/// <reference path="types.d.ts" />

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <Switch>
          <ProtectedRoute
            component={Home}
            exact 
            path="/"
          />
          <Route exact path="/login" component={Login}></Route>
          <Route path="*" component={() => (<div>Page Not Found!</div>)}></Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default Routes;
