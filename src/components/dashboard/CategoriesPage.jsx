// src/components/dashboard/CategoriesPage.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Header } from './Header';
import Categories from './Categories';
import HistoryQuiz from './HistoryQuiz';
import QuestionsPage from './Quiz'; // Import the new component
import { Route, Routes } from 'react-router-dom';

const CategoriesPage = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard--content">
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="history" element={<HistoryQuiz />} />
            <Route path="history/questions" element={<QuestionsPage />} /> {/* Add the new route */}
            {/* Add routes for other categories if needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
