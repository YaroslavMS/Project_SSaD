import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CookieConsent from 'react-cookie-consent';
import Router from './components/ui/Router'
import './assets/styles/global.css'
import './index.css'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Router/>
        <CookieConsent
        location="bottom"
        buttonText="Прийняти"
        cookieName="userConsent"
        style={{ background: "#2B373B", color: "#fff" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Цей сайт використовує файли cookie для покращення взаємодії користувачів.
      </CookieConsent>  
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
