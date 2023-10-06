import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9gjXkqnIVcHF1TjZBCBRyFegy7KLviRI",
  authDomain: "proyectoreact-cc906.firebaseapp.com",
  projectId: "proyectoreact-cc906",
  storageBucket: "proyectoreact-cc906.appspot.com",
  messagingSenderId: "388168864106",
  appId: "1:388168864106:web:763287a006134256db9513"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
