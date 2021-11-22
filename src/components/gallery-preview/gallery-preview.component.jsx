import React from 'react';
import './gallery-preview.styles.scss';

// import {createStructuredSelector} from 'reselect';
// import WithSpinner from '../with-spinner/with-spinner.component';
// import {compose} from 'redux';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



const GalleryPreview = ({gallery}) => {

  return (
    <div className='gallery-preview'>
    <h2>GALLERY</h2>
        <div className="container">
                { gallery.map((galleryItem,index)=>{
                    return (
                      <div key={index} className={`image image-${index+1}`}>
                             <Link to={`/gallery/${galleryItem.id}`} key={index}>           
                        <img src={`/gallery/${galleryItem.pictureUrl}.jpg`} alt={`${galleryItem.title}`}/></Link>
                      </div>
                      );
                  })
                }                    
            </div>
      </div>
  )
}

const mapStateToProps = state => ({
    gallery: state.gallery,
}); 

export default connect(mapStateToProps)(GalleryPreview);
