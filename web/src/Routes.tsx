import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

export const Routes:React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login"component={Login}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;
