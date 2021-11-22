// import {
//   firestore,
//   // fetchGallerykData
// } from '../firebase/firebase.utils.js'; 

const INITIAL_STATE = {
    gallery: [],
    // isFetching: false,
    // errorMessage:undefined
  };

// const GalleryActionTypes = {
//     SET_GALLERY:'SET_GALLERY',
//     SET_CURRENT_ARTWORK:'SET_CURRENT_ARTWORK',
//     FETCH_GALLERY_START: 'FETCH_GALLERY_START',
//     FETCH_GALLERY_SUCCESS:'FETCH_GALLERY_SUCCESS',
//     FETCH_GALLERY_FAILURE: 'FETCH_GALLERY_FAILURE'
// };
  
export const setGallery = gallery => ({
    type: 'SET_GALLERY',
    payload: gallery
});

//loading
// export const fetchGalleryStart = () => ({
//   type: GalleryActionTypes.FETCH_COLLECTIONS_START,
// });

// export const fetchGallerySuccess = (galleryMap) => ({
//     type: GalleryActionTypes.FETCH_COLLECTIONS_SUCCESS,
//     payload: galleryMap,
//   });
//   export const fetchGalleryError = (errorMessage) => ({
//     type: GalleryActionTypes.FETCH_COLLECTIONS_FAILURE,
//     payload: errorMessage,
//   });


  // export const fetchGalleryStartAsync = () => {
  //   //like  mapstatetorporps style
  //   return dispatch => {
  //     const galleryRef = firestore.collection('collections');
  //     dispatch(fetchGalleryStart());
  
  //     //get make an api call to fetch data asociated wiiht this database call
  //     galleryRef.get().then(snapshot=>{
  //       const galleryMap = convertGallerySnapshotToMap(snapshot);
  //      dispatch(fetchGallerySuccess(galleryMap));
  //     }).catch(error => dispatch(fetchGalleryError(error.message)));
  //   }
  // };






export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
   
          // case GalleryActionTypes.FETCH_COLLECTIONS_START:
          //   return {
          //     ...state,
          //     isFetching:true
          //   };
          //   case GalleryActionTypes.FETCH_GALLERY_SUCCESS:
          //     return {
          //     ...state,
          //     isFetching:false,
          //     collections: action.payload,
          //   };
          //   case GalleryActionTypes.FETCH_GALLERY_FAILURE:
          //     return {
          //     ...state,
          //     isFetching:false,
          //     errorMessage:action.payload
          //   };
      default:
        return state
    }
}