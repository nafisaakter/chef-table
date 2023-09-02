import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCrG8dJq5L18gX9XKYKc0BCyZ-yUybnftQ",
  authDomain: "chef-table-4495a.firebaseapp.com",
  projectId: "chef-table-4495a",
  storageBucket: "chef-table-4495a.appspot.com",
  messagingSenderId: "263893915937",
  appId: "1:263893915937:web:9fd39af0ef8feb54930660"
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export default app;