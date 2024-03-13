import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './owner';
import BusinessDetails from './businessDetails'; // Corrected component name and import path
import ImportationDetails from './importationDetails'; // Corrected component name and import path
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BusinessDetails /> {/* Corrected component name */}
    <ImportationDetails /> {/* Corrected component name */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
