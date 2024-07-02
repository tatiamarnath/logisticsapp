import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import DriverList from './components/DriverList';
import HoldingPage from './components/HoldingPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="content">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<DriverList />} />
            {/* Define routes for other menu items */}
            <Route path="/some-menu-item" element={<HoldingPage />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
