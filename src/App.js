import React, { useEffect } from "react";
import { BrowserRouter, Switch, Redirect,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./util/Navigation";
import { Stateprovider } from "./util/Stateprovider";
import reducer, { initialState } from "./InitialState";
import Home from "./Home/homepage";
import Login from "./Login/loginpage";
import Register from "./Registration/registrationpage";
import Update from "./Update/update";
import Delete from "./Delete/delete";
import Users from './GetUsers/Users';

import "./App.css";

function App() {
  
  return (
    <Stateprovider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Navigation />
            <Home />
          </Route>
          <Route path="/login" exact>
            
            <Login />
          </Route>
          <Route path="/register" exact>
            
            <Register />
          </Route>
          <Route path="/update" exact>
          <Navigation />
            <Update />
          </Route>
          <Route path="/delete" exact>
          <Navigation />
            <Delete />
          </Route> 
          <Route path="/users" exact > 
            <Navigation />
            <Users />
          </Route>
          <Redirect to="/"> </Redirect>
        </Switch>
      </BrowserRouter>
    </Stateprovider>
  );
}

export default App;
