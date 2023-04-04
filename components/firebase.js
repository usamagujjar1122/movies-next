// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBxktyW8SzI5El2g5IfhvBU9wROswnOXmU",
//   authDomain: "shopultimate-bb461.firebaseapp.com",
//   projectId: "shopultimate-bb461",
//   storageBucket: "shopultimate-bb461.appspot.com",
//   messagingSenderId: "649711237771",
//   appId: "1:649711237771:web:523d66287674facd95b28e",
//   measurementId: "G-J643QPGWW5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const storage = getStorage(app);





// 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnBYKuxKsicuRIIqKmZXKg9wawiMYS8b8",
  authDomain: "movies-2368e.firebaseapp.com",
  projectId: "movies-2368e",
  storageBucket: "movies-2368e.appspot.com",
  messagingSenderId: "631150530716",
  appId: "1:631150530716:web:5481031abcfff415df1d59",
  measurementId: "G-0CTFWH25PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);