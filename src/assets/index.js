// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '').replace('.jpg','').replace('.svg','').replace('.png','')] = r(item); });
//     console.log(images)
//     return images;
//   }
  
//   export const backgroundImages = importAll(require.context('./background', true, /\.(png|jpe?g|svg)$/));
//   console.log(backgroundImages)

//   export const profileImages =importAll(require.context('./profile', true, /\.(png|jpe?g|svg)$/));
//   console.log(profileImages)


