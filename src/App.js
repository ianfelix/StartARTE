import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
