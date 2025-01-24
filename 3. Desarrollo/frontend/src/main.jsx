import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import Products from './pages/Products.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);