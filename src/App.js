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
import GalleryPreview from './components/gallery-preview/gallery-preview.component.jsx'
import ArtworkPage from './pages/artwork-page/artwork-page.component.jsx';
import {nanoid} from 'nanoid';
class App extends React.Component  {

  async componentDidMount () {
    const {setGallery} = this.props;

    function generateUrl(name){
      return name.toLowerCase().replace(/\s/g, '-').replace(/\./g,'');
    }
   try {
    const gallery = await fetchGallerykData();
    const galleryWithUrl = gallery.map(artwork=>{
      
      artwork.pictureUrl=generateUrl(artwork.title)
      artwork.id=nanoid()
      ; return artwork})
    await setGallery(galleryWithUrl);
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
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path={`/gallery/preview`} component={GalleryPreview}/>
            <Route path={`/gallery/:artworkId`} component={ArtworkPage}/>

            <Route path="*">error</Route>
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
