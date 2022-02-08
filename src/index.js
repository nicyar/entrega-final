import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContextProvider } from './componentes/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchContextProvider } from './componentes/SearchContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAVNOmAECpLFPApMRcBZ3L_KuwTJJT2Q",
  authDomain: "mi-primer-react.firebaseapp.com",
  projectId: "mi-primer-react",
  storageBucket: "mi-primer-react.appspot.com",
  messagingSenderId: "202673285584",
  appId: "1:202673285584:web:cbcb6812c4b1d8562eb1d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <SearchContextProvider>
      <App />
    </SearchContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);