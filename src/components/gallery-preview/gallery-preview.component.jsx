import React from 'react';
import './gallery-preview.styles.scss';

import { setCurrentArtwork } from '../../redux/root.reducer.js';

// import {createStructuredSelector} from 'reselect';
// import WithSpinner from '../with-spinner/with-spinner.component';
// import {compose} from 'redux';

import {connect} from 'react-redux';

const GalleryPreview = ({gallery,setCurrentArtwork, match,history}) => {
  return (
    <div className='gallery-preview'>
        <div className="container">
                { gallery.map((galleryItem,index)=>{
                    return (
                      <div key={index} className={`image image-${index+1}`}
                        onClick={()=>setCurrentArtwork(galleryItem)} 
                      >                       
                        <img src={`/gallery/${galleryItem.pictureUrl}.jpg`} alt={`${galleryItem.title}`}/>
                      </div>
                      );
              
                  })
                }                    
            </div>
      </div>
  )
}


// const mapStateToProps = createStructuredSelector({
//   //the name of property need to be the one withspinner is expecting hence this 
//   isLoading: selectIsCollectionFetching,
// });

const mapStateToProps = state => ({
    gallery: state.gallery,
    // currentArtwork: state.currentArtwork
  }); 
  const mapDispatchToProps = dispatch => ({
    setCurrentArtwork: currentArtwork => dispatch(setCurrentArtwork(currentArtwork))
  })

export default connect(mapStateToProps,mapDispatchToProps)(GalleryPreview);

 // setCurrentArtwork(galleryItem); 
                            // history.push(`${match.path}/${galleryItem.pictureUrl}`)}