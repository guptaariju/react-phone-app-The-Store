import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
//import { AuthProvider } from "./Auth";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        < Navbar />
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={ProductList} />
              <PrivateRoute path="/details" component={Details} />
              <PrivateRoute path="/cart" component={Cart} />
              <Route component={Default} />
              
            </Switch>
            <Modal />
      
      </React.Fragment>
    );
  }
}

export default App;
