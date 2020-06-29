import React from 'react';
import './assets/sass/components/App.scss';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}
