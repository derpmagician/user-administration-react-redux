import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter,
} from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

// console.log("ENV=>", process.env);
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? "/user-administration-react-redux" : process.env.BASENAME}>
      {/* <BrowserRouter basename={process.env.NODE_ENV === 'production' ? "/user-administration-react-redux" : "/"}> */}
        <App />
      </BrowserRouter>
      </Provider>
    
    </Auth0Provider>
  </React.StrictMode>
);

