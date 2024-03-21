importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyDTvMn0jSRBTOHCasfXwrbxI_FribDmGfg",
  authDomain: "msnotification.firebaseapp.com",
  projectId: "msnotification",
  storageBucket: "msnotification.appspot.com",
  messagingSenderId: "464394570384",
  appId: "1:464394570384:android:9be3c036db2af5ec82a615",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
