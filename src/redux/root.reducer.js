import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import galleryReducer from './gallery/gallery.reducer';

const persistConfig = {
  key:'root',
  storage,
  whitelist:['gallery']
}

export const rootReducer = combineReducers({
  gallery: galleryReducer
});

export default persistReducer(persistConfig,rootReducer)