import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import AllCards from './AllCards';

export default function App({ questions, ques }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage ques={ques} />} />
        <Route path="/theme/:id" element={<AllCards questions={questions} />} />
      </Routes>
    </>
  );
}
