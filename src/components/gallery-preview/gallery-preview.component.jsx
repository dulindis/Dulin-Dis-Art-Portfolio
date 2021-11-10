import React from 'react';
import './gallery-preview.styles.scss';
import images from '../../assets/index.js';
import { setCurrentArtwork } from '../../redux/root.reducer.js';

import {connect} from 'react-redux';


const GalleryPreview = ({gallery,setCurrentArtwork, match,history}) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  };
    function setTheArtwork(artwork){
      setCurrentArtwork(artwork); 
      history.push(`${match.path}/${artwork.pictureUrl}`)
  }
    
return (
  <div className='gallery-preview'>
      <div className="container">
              {
                
                gallery.map((galleryItem,index)=>{
                  return (
                    <div key={index} className={`image image-${index+1}`}
                    onClick={setTheArtwork(galleryItem)} >                       
                      <img src={images[capitalizeFirstLetter(galleryItem.pictureUrl)]} alt={`${galleryItem.title}`}/>
                    </div>
                    );
            
              })}                    
          </div>
    </div>
)
}

const mapStateToProps = state => ({
    gallery: state.gallery,
    currentArtwork: state.currentArtwork

  }); 
  const mapDispatchToProps = dispatch => ({
    setCurrentArtwork: currentArtwork => dispatch(setCurrentArtwork(currentArtwork))
  })

export default connect(mapStateToProps,mapDispatchToProps)(GalleryPreview);

 // setCurrentArtwork(galleryItem); 
                            // history.push(`${match.path}/${galleryItem.pictureUrl}`)}