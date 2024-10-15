import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Roadmap from './Roadmap';
import Selection from './Selection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Roadmap />
    <Selection />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
