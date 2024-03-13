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

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseMessaging = getMessaging(firebaseApp);

