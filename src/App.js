import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import About from "./AboutPage/About";
import Login from "./Login/LoginPage";
import Signup from "./SignUp/SignUp"
import Contact from "./Contact/Contact.jsx";
import Search from "./Search/Search.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import Restaurant from "./Restaurant/Restaurant.jsx";
import Navigation from "./NavigationBar/Navigation.jsx";
import RestaurantList from "./RestaurantList/RestaurantList.jsx";

function App() {
  return (
    <>
      <TopBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          path="/about" exact component={About}/>
        <Route 
          path="/login" exact component={Login}/>
        <Route 
          path="/signup" exact component={Signup}/>
        <Route 
          path="/contact" exact component={Contact}/>
        <Route 
          path="/search" component={Search}/>
        <Route 
          path="/searchbar" component={SearchBar}/>
        <Route 
          path="/restaurant" component={Restaurant}/>
        <Route 
          path="/navigation" component={Navigation}/>
        <Route path="/404" component={Error} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
