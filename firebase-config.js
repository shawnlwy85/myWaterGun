import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

//ref fb login: https://www.youtube.com/watch?v=kEfe9u5F_L0&t=33s
//ref email login & logout: https://www.youtube.com/watch?v=9bXhf_TELP4

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBpZk0EEvL5L6u70Mu6HDCmtgtmdM55u8U",
//   authDomain: "eclipse-wms-react.firebaseapp.com",

//   projectId: "eclipse-wms-react",
//   storageBucket: "eclipse-wms-react.appspot.com",
//   messagingSenderId: "738578716851",
//   appId: "1:738578716851:web:d4f3ab1255ae08ef52f8c6",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBKPOLT7PCOdoakrG_Q17KNOSaJu_H_B_I",
  authDomain: "shawnplayground-c22a5.firebaseapp.com",
  projectId: "shawnplayground-c22a5",
  storageBucket: "shawnplayground-c22a5.appspot.com",
  messagingSenderId: "181776370183",
  appId: "1:181776370183:web:75b20a1231f2009246b8a2",
  measurementId: "G-81YLW09SEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const authentication = getAuth(app);
