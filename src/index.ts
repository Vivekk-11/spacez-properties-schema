// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { GlobalData, data } from "./model";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDNnlW7fuCdBe-qjXxI8XLUnFAEd53h0",
  authDomain: "spacez-all.firebaseapp.com",
  projectId: "spacez-all",
  storageBucket: "spacez-all.appspot.com",
  messagingSenderId: "988598930373",
  appId: "1:988598930373:web:240f41af53cdb668fd99ac",
  measurementId: "G-60SMJ6Q20J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

async function addGlobalDataToFireStore(data: GlobalData) {
  try {
    await setDoc(doc(db, "globalData", "globalDocId"), data.toJson());
    console.log(
      `RoomType with roomId: ${data} added to Firestore successfully!`
    );
  } catch (error) {
    console.error("Error adding RoomType to Firestore:", error);
  }
}

addGlobalDataToFireStore(data);
