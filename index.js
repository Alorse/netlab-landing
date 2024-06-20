  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkhy-UrrKxASz3-qTYQB41PDSXA4vQ2tM",
    authDomain: "neatlab-newsletter.firebaseapp.com",
    projectId: "neatlab-newsletter",
    storageBucket: "neatlab-newsletter.appspot.com",
    messagingSenderId: "773482401232",
    appId: "1:773482401232:web:d31d2ecf6a85676787bdd5",
    measurementId: "G-RCFKL1L07V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);