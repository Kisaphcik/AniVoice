import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRoute from './routes/mainRoute';
import NotFound from './routes/NotFound/NotFound';
import './main.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)