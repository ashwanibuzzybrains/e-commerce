import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Purchase from "./components/Purchase";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import SignUp from "./components/SignUp";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/purchase" component={Purchase} />
        <ProtectedRoute path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
