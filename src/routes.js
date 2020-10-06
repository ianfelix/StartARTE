import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Norte from './pages/Norte';
import Nordeste from './pages/Nordeste';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/norte' element={<Norte />} />
      <Route path='/nordeste' element={<Nordeste />} />
    </Routes>
  );
};

export default MainRoutes;
