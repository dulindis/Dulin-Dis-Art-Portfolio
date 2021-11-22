import React, { useEffect } from 'react';
import './gallery.styles.scss';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import GalleryPreview from '../../components/gallery-preview/gallery-preview.component.jsx';
import ArtworkPage from '../artwork-page/artwork-page.component';


const Gallery = ({gallery,match,location,history}) => {
  

    // useEffect(()=>{
    //     const params = new URLSearchParams(location.search);
    //     const q = params.get("g")
    // },[])
    
    return (
        <div className='gallery'>
            <Route
                exact
                path={`${match.path}`}
                component={GalleryPreview}
                // setTheArtwork={setTheArtwork}
            />
            <Route
                path={`${match.path}/:artworkId`}
                component={ArtworkPage}>
                    {/* <Route path={`/{currentArtwork}`}></Route> */}
                </Route>
         </div>
    );
}

const mapStateToProps = state => ({
    gallery: state.gallery
  }); 


export default connect(mapStateToProps)(Gallery);


