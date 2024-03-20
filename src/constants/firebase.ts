import { initializeApp } from "firebase/app";
import { getMessaging  } from "firebase/messaging";

export const firebaseConfig = {
    apiKey: "AIzaSyDTvMn0jSRBTOHCasfXwrbxI_FribDmGfg",
    authDomain: "msnotification.firebaseapp.com",
    projectId: "msnotification",
    storageBucket: "msnotification.appspot.com",
    messagingSenderId: "464394570384",
    appId: "1:464394570384:android:9be3c036db2af5ec82a615"
};

// export const firebaseConfig = {
//     apiKey: "AIzaSyCXlTPxSCBii6XRjOpgHJ5eHFyAB4YOum0",
//   authDomain: "test-project-cd7d7.firebaseapp.com",
//   projectId: "test-project-cd7d7",
//   storageBucket: "test-project-cd7d7.appspot.com",
//   messagingSenderId: "738235412840",
//   appId: "1:738235412840:web:7fda7d8e44efedb00026dd",
//   measurementId: "G-44J596HQWV"
// };



export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseMessaging = getMessaging(firebaseApp);

