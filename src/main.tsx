import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initializeApp } from 'firebase/app';
import { config } from './utils/config.ts';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(config);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
