function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '').replace('.jpg','').replace('.svg','').replace('.png','')] = r(item); });
    return images;
  }
  
  export const backgroundImages = importAll(require.context('./background', true, /\.(png|jpe?g|svg)$/));
  export const profileImages =importAll(require.context('./profile', true, /\.(png|jpe?g|svg)$/));

