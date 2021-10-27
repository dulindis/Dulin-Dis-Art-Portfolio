const INITIAL_STATE = {
    gallery: []
  };

export const setGallery = gallery => ({
    type: 'SET_GALLERY',
    payload: gallery
  });
  
export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
      default:
        return state
    }
}