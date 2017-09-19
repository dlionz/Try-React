import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//includes
import "./Assets/css/default.min.css";
import "./Assets/computer.jpeg";

//Components
import Header from "./components/headerComponent/header";
import Homepage from "./components/pages/homePage";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";


//includes
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/Contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
