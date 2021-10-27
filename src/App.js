import logo from './logo.svg';
import './App.css';
import React from 'react';
import {fetchGallerykData} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import { setGallery } from './redux/root.reducer';

class App extends React.Component  {

  async componentDidMount () {
    const {setGallery} = this.props;
   try {
    const gallery = await fetchGallerykData();
    // console.log(gallery,'1')
    await setGallery(gallery);

   } catch (error) {
    console.log(error)
   }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
