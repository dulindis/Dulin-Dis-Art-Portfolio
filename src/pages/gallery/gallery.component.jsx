import React from 'react';
import './gallery.styles.scss';
import images from '../../assets/index.js';

// import {fetchGallerykData} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';

const Gallery = ({gallery}) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  

    return (
        <div className='contact'>
            GALLERY PAGE 
            <div class="container">
                {gallery.map((galleryItem,index)=>{
                    console.log(images);
                    return (<div key={index} className={`image image-${index}`}><img src={images[capitalizeFirstLetter(galleryItem.pictureUrl)]} alt={`${galleryItem.title}`}/></div>)
                })}
            </div>
            
            <div class="container">
                <div class="image-1"></div>
                <div class="image-2"></div>
                <div class="image-3"></div>
                <div class="image-4"></div>
                <div class="image-5"></div>
            </div>
    
         </div>
    );
    
}

const mapStateToProps = state => ({
    gallery: state.gallery
  }); 


export default connect(mapStateToProps)(Gallery);