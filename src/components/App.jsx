import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OneCard from './OneCard';

export default function App({ questions }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/theme:id" element={<OneCard />} />
      </Routes>
    </>
  );
}
