import React, { useEffect } from 'react';
import './gallery.styles.scss';

import { Route } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {fetchGalleryStartAsync} from '../../redux/gallery/gallery.actions'
import { selectIsGalleryFetching } from '../../redux/selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import GalleryPreview from '../../components/gallery-preview/gallery-preview.component.jsx';
import ArtworkPage from '../artwork-page/artwork-page.component';


const GalleryPreviewWithSpinner = WithSpinner(GalleryPreview);
const ArtworkPageWithSpinner = WithSpinner(ArtworkPage);

class Gallery extends React.Component  {
    
     componentDidMount(){
         const {fetchGalleryStartAsync} =this.props;
         fetchGalleryStartAsync()
    }



   render(){
    const  {gallery,match,location,history,isGalleryFetching} = this.props;

    return (
        <div className='gallery'>
            <Route
                exact
                path={`${match.path}`}
                // component={GalleryPreview}
                // setTheArtwork={setTheArtwork}
                render={(props)=> <GalleryPreviewWithSpinner isLoading={isGalleryFetching} {...props}/>}
            />
            <Route
                path={`${match.path}/:artworkId`}
                // component={ArtworkPage}
                render={(props)=> <ArtworkPageWithSpinner isLoading={isGalleryFetching} {...props}/>}

                >
                    {/* <Route path={`/{currentArtwork}`}></Route> */}
                
                </Route>
         </div>
    );
   }
}

const mapStateToProps = createStructuredSelector({
    isGalleryFetching: selectIsGalleryFetching
})

  const mapDispatchToProps = dispatch => ({
    fetchGalleryStartAsync: ()=> dispatch(fetchGalleryStartAsync())
  })

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);


