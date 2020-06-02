import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import AuthenticationPage from './pages/authentication/authentication.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <AuthenticationPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
