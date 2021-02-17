import React from 'react';
import ReactDOM from 'react-dom';
import Smartphone from './components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Smartphone height='880px' width='550px'>
      <div style={{ textAlign: 'center', paddingTop: '30px', color: 'white' }}>
        <h1>I love this app!</h1>
        <p>Looks freakin amazing!</p>
      </div>
    </Smartphone>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default Smartphone;
