import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Root } from './Root'
import { MyStateComp } from './MyStateComp';

const ahojDiv = <div>
  <MyStateComp />

  <Root message="ahoj" type="primary" numbers={[1, 2, 3, 4, 5]} />
                     
                     
</div>
ReactDOM.render(ahojDiv, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
