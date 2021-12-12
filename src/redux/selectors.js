import { createSelector } from 'reselect';

const selectGallery = (state) => state.gallery;

export const selectArtworks = createSelector(
  [selectGallery],
  (gallery) => gallery.gallery //?
);

// export const selectCollectionsForPreview = createSelector(
//   [selectGallery],
//   (collections) =>
//     collections ? Object.keys(collections).map((key) => collections[key]) : []
// );

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], 
//     (collections) => collections ? collections[collectionUrlParam] : null
//   );

export const selectIsGalleryFetching = createSelector(
  [selectGallery],
  gallery=> gallery.isFetching
   
)

export const selectIsGalleryLoaded = createSelector(
  [selectGallery],
  gallery=> !!gallery.gallery //??
)
//fix here