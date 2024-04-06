import { firebaseMessaging } from "@/constants/firebase";
import { TokenService } from "@/services/TokenService";
import { getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";

// denied
// granted

export const useFirebase = () => {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      if (!TokenService.checkFirebaseToken()) {
        try {
          const token = await getToken(firebaseMessaging, {
            vapidKey: `BEw6JWIop1eC-829On2aKq7XnXUad5v7HB7wmqdL8YG2KA2dbb9TaH4Urut8DerAOUBFCsb81bv6iP6Nibk83Vc`,
          });
          TokenService.setFirebaseToken(token);
        } catch (e) {
          console.log(e);
        }
      }
    }

    if (permission === "denied") {
      TokenService.removeFirebaseToken();
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(firebaseMessaging, (payload) => {
    new Notification(
      payload.notification?.title || "Title",
      payload.notification
    );
  });
};
