import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './scripts/page';

import Home from './pages/page_home';
import PageOldEtc from './pages/old/page_etc';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page component={Home} title={'hello, i\'m justin!'} />} />
      <Route path="/etc" element={<Page component={PageOldEtc} title={'justinf.dev: etc'} />} />
    </Routes>
  );
}

export default App;