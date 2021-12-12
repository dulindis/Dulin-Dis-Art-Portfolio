import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import Contact from './pages/contact/contact.component.jsx';
import About from './pages/about/about.component.jsx';

// import {nanoid} from 'nanoid';
class App extends React.Component  {
//"env-cmd -f .env.development react-scripts start",
 
render () {
  console.log('from app');
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />

            <Route path="*">error</Route>
          </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
  
};



export default  App


