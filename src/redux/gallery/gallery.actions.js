import GalleryActionTypes from './gallery.types';
import {
    firestore,
    convertGalleryToMap
  } from '../../firebase/firebase.utils';


// export const setGallery = (gallery) => ({
//     type:GalleryActionTypes.SET_GALLERY,
//     payload: gallery
// })



export const fetchGalleryStart = () => ({
  type: GalleryActionTypes.FETCH_GALLERY_START
});

export const fetchGallerySuccess = galleryMap => ({
  type: GalleryActionTypes.FETCH_GALLERY_SUCCESS,
  payload: galleryMap
});

export const fetchGalleryFailure = errorMessage => ({
  type: GalleryActionTypes.FETCH_GALLERY_FAILURE,
  payload: errorMessage
});

export const fetchGalleryStartAsync = () => {
  return dispatch => {
    const galleryRef = firestore.collection('artworks');
    dispatch(fetchGalleryStart())

    galleryRef
      .get()
      .then( snapshot=>{
        const galleryMap =  convertGalleryToMap(snapshot);
        dispatch(fetchGallerySuccess(galleryMap))
      })
      .catch(error=>dispatch(fetchGalleryFailure(error.message)))
  };
};