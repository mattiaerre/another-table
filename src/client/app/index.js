import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const restaurant = window.__RESTAURANT__;

const root = document.getElementsByClassName('reactaurant')[0];

ReactDOM.render(<App restaurant={restaurant} />, root);
