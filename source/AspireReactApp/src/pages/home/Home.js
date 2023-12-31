import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeftPanel from './LeftPanel';
import Dashboard from '../quicksight/Dashboard';
import SelfServiceReporting from '../quicksight/SelfServiceReporting';
import Reports from '../reports/ReportList';
import GraphExplorer from '../graphexplorer/GraphExplorer';

import './Home.css';

export default function Home() {
  window.location.hash = '';
  return (
    
    <Box id="Home" className="Home">
      <BrowserRouter>
        <LeftPanel />
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/selfservice" element={<SelfServiceReporting />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/graph" element={<GraphExplorer />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
