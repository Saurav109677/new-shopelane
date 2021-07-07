import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import OrderConform from './components/Order';
import SignInOutContainer from './TabsContainers';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id"  component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/container" component={SignInOutContainer} />
      <Route path="/order" component={OrderConform} />
      <Route component={PageNotFound} />
    </Switch>
    </BrowserRouter>
 
  );
}

export default App;
