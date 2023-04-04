import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Item from './Componants/Item';
import ItemList from './Componants/ItemList';
import Detail from './Componants/Details';
import './Styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');

createRoot(root).render(<App />);
