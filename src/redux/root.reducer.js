const INITIAL_STATE = {
    gallery: [],
    currentArtwork:''
  };

export const setGallery = gallery => ({
    type: 'SET_GALLERY',
    payload: gallery
  });
  export const setCurrentArtwork = currentArtwork => ({
    type: 'SET_CURRENT_ARTWORK',
    payload: currentArtwork
  });
  
export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
          case 'SET_CURRENT_ARTWORK':
            return {
              ...state,
              currentArtwork: action.payload
          }
      default:
        return state
    }
}