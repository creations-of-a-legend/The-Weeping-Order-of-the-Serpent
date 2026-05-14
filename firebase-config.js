// 1) Create a Firebase project.
// 2) Enable Authentication -> Email/Password.
// 3) Create Firestore Database.
// 4) Paste your web app config below.
// 5) Put your own Firebase Auth UID inside ADMIN_UIDS after you create your admin account.

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// TESTING ONLY: set true to make every signed-in account an admin immediately.
// Turn this back to false before sharing the site publicly.
export const TEST_AUTO_ADMIN = true;

export const ADMIN_UIDS = [
  // "PASTE_YOUR_ADMIN_UID_HERE"
];
