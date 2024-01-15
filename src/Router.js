/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopBar from './Pages/Header';
import Intro from './Pages/Intro';

const Routers = () => {
  return (
    <Router basename="/SLEWEB_ver.2">
      <Routes>
        {/* 전체를 감싸는 Header */}
        {/* <Route path="" element={<TopBar />} /> */}
          {/* 기본적으로 Intro를 렌더링하도록 설정 */}
          <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default Routers;
