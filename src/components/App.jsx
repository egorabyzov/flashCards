import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import AllCards from './AllCards';
import MainPage from './MainPage';
import NavBar from './NavBar';

export default function App({  }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
