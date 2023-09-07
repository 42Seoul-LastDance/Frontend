import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
// import InputForm from './component/multi/InputForm';
import HandleLoginButton from './component/single/HandleLoginButton';
// import AxiosComponent from 'AxiosComponent';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Clock />
    {/* <InputForm /> */}
    {/* <App /> */}
    {/* <AxiosComponent url='http://10.12.4.3:3000'></AxiosComponent> */}
    <HandleLoginButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 