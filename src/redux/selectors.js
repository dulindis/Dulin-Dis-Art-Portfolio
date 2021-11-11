// import { createSelector } from 'reselect';

// const selectGallery = (state) => state.gallery;

// export const selectCollections = createSelector(
//   [selectShop],
//   (shop) => shop.collections
// );

// export const selectCollectionsForPreview = createSelector(
//   [selectGallery],
//   (collections) =>
//     collections ? Object.keys(collections).map((key) => collections[key]) : []
// );

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], 
//     (collections) => collections ? collections[collectionUrlParam] : null
//   );

// export const selectIsCollectionFetching = createSelector(
//   [selectShop],
//   shop=> shop.isFetching
   
// )

// export const selectIsCollectionsLoaded = createSelector(
//   [selectShop],
//   shop=> !!shop.collections
// )