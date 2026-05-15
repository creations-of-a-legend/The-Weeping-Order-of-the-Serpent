// firebase-config.js
// Paste your Firebase web app config here.
// Firebase Console → Project Settings → Your apps → Web app config.

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Testing admin code. Change this before sharing publicly.
export const ONE_TIME_ADMIN_CODE = "FIRST-WEEPER-0001";

// Guest messages expire after 5 minutes.
export const GUEST_MESSAGE_LIFETIME_MS = 5 * 60 * 1000;

// Guest anti-spam cooldown.
export const GUEST_COOLDOWN_MS = 4000;
