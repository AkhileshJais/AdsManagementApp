import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Dashboard from './components/Dashboard';
import CreateAds from './components/CreateAds';
import CreateAdsPage from './components/pages/CreateAdsPage';
import DashboardPage from './components/pages/DashboardPage';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/createads" element={<CreateAds/>} />
          <Route path="/dashboardpage" element={<DashboardPage/>} />
          <Route path="/createadspage" element={<CreateAdsPage/>} />
        </Routes>
        </div>
  );
}

export default App;
