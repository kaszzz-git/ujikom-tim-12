// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjcOlDiHvE-Ewnr-o7rTOgt0oBB4K2bI8",
  authDomain: "ujikom-tim-12-57934.firebaseapp.com",
  databaseURL: "https://ujikom-tim-12-57934-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ujikom-tim-12-57934",
  storageBucket: "ujikom-tim-12-57934.firebasestorage.app",
  messagingSenderId: "357945110973",
  appId: "1:357945110973:web:de5fdeafd943a28e6b22d4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
