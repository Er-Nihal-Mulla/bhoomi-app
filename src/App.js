import React, { useState, useEffect } from 'react';

import './App.css';



import MyProfile from './Components/UserAccount/MyProfile/MyProfile'
import MyOrders from './Components/UserAccount/MyOrders/MyOrders';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import Slider from './Components/Slider/Slider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Cart from './Components/Cart/Cart';
import Details from './Components/Details/Details';


function App() {



  // Cart View Change
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartViewHandler = (e) => {
    if (isCartVisible)
      setIsCartVisible(false);
    else
      setIsCartVisible(true);
  }





  return (



    <Router>
      <div>


        <Header cartviewhandler={cartViewHandler}></Header>


        <Cart iscartvisible={isCartVisible} cartviewhandler={cartViewHandler}></Cart>

        <Switch>
          <Route exact path="/myprofile" component={MyProfile} >
          </Route>
          <Route exact path="/myorders" component={MyOrders} ></Route>

          <Route path="/details/:id" component={Details} >
          </Route>
          <Route path="/">
            <Slider />
            <ProductList></ProductList>
          </Route>


        </Switch>
        <footer>
          <Footer></Footer>
        </footer>


      </div>


    </Router>


  );
}

export default App;
