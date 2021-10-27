import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCynhgqlzL4TV7btd4vviujsaU8sKnoR8M",
    authDomain: "art-website-6b5e4.firebaseapp.com",
    projectId: "art-website-6b5e4",
    storageBucket: "art-website-6b5e4.appspot.com",
    messagingSenderId: "771082519669",
    appId: "1:771082519669:web:5fbfc1b05a2ce9b7c8a43c",
    measurementId: "G-DVPYEN78WF"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const fetchGallerykData = async () => {
    const galleryRef = firestore.collection('artworks');
    const snapShot = await galleryRef.get();
    const gallery = snapShot.docs.map(doc=>doc.data())
    // return {
    //     gallery
    // };
    return gallery
};




  