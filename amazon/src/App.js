import React from 'react';
import './App.css';
import Footer from './component/Footer';

import Main from './component/Main';
import MainHeader from './component/MainHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './component/Detail';
import Search from './component/Search';
import Checkout from './component/Checkout';

const App = () => {
  return (
    <div>
      <Router>
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
