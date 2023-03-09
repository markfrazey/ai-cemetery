import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCX_cJopa0rg8rXSTLqETZ2CkI3gBOFF-M",
  authDomain: "chatbot-cemetery.firebaseapp.com",
  databaseURL: "https://chatbot-cemetery-default-rtdb.firebaseio.com",
  projectId: "chatbot-cemetery",
  storageBucket: "chatbot-cemetery.appspot.com",
  messagingSenderId: "561812672031",
  appId: "1:561812672031:web:a8687c09ac857107e60f2a"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
