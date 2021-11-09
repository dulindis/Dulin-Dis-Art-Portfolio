import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {fetchGallerykData} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import { setGallery } from './redux/root.reducer';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import Contact from './pages/contact/contact.component.jsx';
import About from './pages/about/about.component.jsx';
import Gallery from './pages/gallery/gallery.component.jsx';

class App extends React.Component  {

  async componentDidMount () {
    const {setGallery} = this.props;
   try {
    const gallery = await fetchGallerykData();
    await setGallery(gallery);

   } catch (error) {
    console.log(error)
   }
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
  
};

const mapStateToProps = state => ({
  gallery: state.gallery
});
const mapDispatchToProps = dispatch => ({
  setGallery: gallery => dispatch(setGallery(gallery))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
