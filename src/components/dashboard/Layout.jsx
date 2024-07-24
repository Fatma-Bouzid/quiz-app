// src/components/Layout.jsx
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import { Header } from './dashboard/Header';

const Layout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard--content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
