import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Norte from './pages/Norte';
import Nordeste from './pages/Nordeste';
import Mestres from './pages/Mestres';
import NotFound from './pages/NotFound';
import Artes from './pages/Artes';
import Decoracao from './pages/Decoracao';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='norte/*' element={<Norte />} />
      <Route path='norte/artes' element={<Artes />} />
      <Route path='norte/mestres' element={<Mestres />} />
      <Route path='norte/decoracao' element={<Decoracao />} />
      <Route path='nordeste/*' element={<Nordeste />} />
      <Route path='nordeste/artes' element={<Artes />} />
      <Route path='nordeste/mestres' element={<Mestres />} />
      <Route path='nordeste/decoracao' element={<Decoracao />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
