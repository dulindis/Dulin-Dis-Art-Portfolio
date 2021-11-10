import React, { useState } from 'react';
import './gallery.styles.scss';
import images from '../../assets/index.js';
import {connect} from 'react-redux';
import { setCurrentArtwork } from '../../redux/root.reducer.js';


const Gallery = ({gallery,match,history,setCurrentArtwork}) => {

    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function setTheArtwork(artwork){
        console.log('artwork:',artwork);
        setCurrentArtwork(artwork); 
        history.push(`${match.path}/${artwork.pictureUrl}`)
    }

    return (
        <div className='gallery'>
            GALLERY PAGE 
            <div className='gallery-preview'>
                <div class="container">
                        {gallery.map((galleryItem,index)=>{
                            return (<div key={index} className={`image image-${index+1}`} onClick={()=>setTheArtwork(galleryItem)}><img src={images[capitalizeFirstLetter(galleryItem.pictureUrl)]} alt={`${galleryItem.title}`}/></div>);
                    
                        })}

                        
                    </div>
           </div>
         </div>
    );
    
}

const mapStateToProps = state => ({
    gallery: state.gallery,
    currentArtwork: state.currentArtwork
  }); 

const mapDispatchToProps = dispatch => ({
    setCurrentArtwork: currentArtwork => dispatch(setCurrentArtwork(currentArtwork))
  })
export default connect(mapStateToProps,mapDispatchToProps)(Gallery);


