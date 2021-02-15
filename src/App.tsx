import React from 'react';
import './App.css';
import { Navbar } from './m1-ui/navbar/Navbar';
import { Routes } from './m1-ui/routes/Routes';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
};
