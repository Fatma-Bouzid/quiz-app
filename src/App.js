import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/dashboard/Header';
import Sidebar from './components/dashboard/Sidebar';
import Content from './components/dashboard/Content';
import CategoriesPage from './components/dashboard/CategoriesPage';
import LoginPage from './components/login/LoginPage';
import HistoryQuiz from './components/dashboard/HistoryQuiz'; // Importez HistoryQuiz

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories/*" element={<CategoriesPage />} /> {/* Joker pour les sous-routes des catégories */}
        <Route path="/quiz/history" element={<HistoryQuiz />} /> {/* Route pour HistoryQuiz */}
      </Routes>
    </Router>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard--content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
