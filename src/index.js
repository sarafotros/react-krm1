import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import  './assets/css/fontIran.css'
import * as serviceWorker from './serviceWorker';
// import Home from "./screens/Home";
// import MyStyles from './screens/MtStyles';
// import HOC from './screens/HOCstyles'
import Index from './screens/index'

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Index/>
    {/* <HOC/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
