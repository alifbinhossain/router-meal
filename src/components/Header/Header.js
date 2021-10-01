import React from "react";
import "./Header.css";
import MyNavbar from "../MyNavbar/MyNavbar";
import About from "../About/About";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meals from "../Meals/Meals";
import MealDetails from "../Meals/MealDetails/MealDetails";
import NotFound from "../NotFound/NotFound";

const Header = () => {
  return (
    <header>
      <Router>
        <MyNavbar></MyNavbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meals/meal/:id">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </header>
  );
};

export default Header;
