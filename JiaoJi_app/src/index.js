// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import ActivityDetail from "./View/DetailView";
import SignUp from "./View/SignUpView";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} > </Route>
                <Route exact path="/activity1" element={<ActivityDetail ActivityId={1}/>} />
                <Route exact path="/activity2" element={<ActivityDetail ActivityId={2}/>} />
                <Route exact path="/activity3" element={<ActivityDetail ActivityId={3}/>} />
                <Route exact path="/activity4" element={<ActivityDetail ActivityId={4}/>} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        {/*<App />*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
