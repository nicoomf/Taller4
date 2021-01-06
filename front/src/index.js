import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Libro from './vistas/grid';
import MenuTabs from './vistas/MenuTabs';
import axios from 'axios';


axios.interceptors.request.use(config=>{
  
  const token = localStorage.getItem('TOKEN_APP_TALLER');

  if(token!=null)
  {
    config.headers.Authorization =  `Bearer ${token}`;
  }else{
    config.headers.Authorization = null;
  }
 
  return config
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
