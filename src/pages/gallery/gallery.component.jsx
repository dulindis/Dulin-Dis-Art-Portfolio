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
        <div className='gallery'>
            GALLERY PAGE 
           <div className='category-preview'>
            <div class="container">
                    {gallery.map((galleryItem,index)=>{
                        console.log(images);
                        return (<div key={index} className={`image image-${index+1}`}><img src={images[capitalizeFirstLetter(galleryItem.pictureUrl)]} alt={`${galleryItem.title}`}/></div>);
                   
                    })}
                </div>
           </div>
         </div>
    );
    
}

const mapStateToProps = state => ({
    gallery: state.gallery
  }); 


export default connect(mapStateToProps)(Gallery);