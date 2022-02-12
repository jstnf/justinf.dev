import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './scripts/Page';

import PageHome from './pages/PageHome';

import PageOldHome from './pages/old/PageOldHome';
import PageOldEtc from './pages/old/PageOldEtc';

function App() {
  return (
    <Routes>
      <Route path='' element={<Page component={PageHome} title={'Hello! I\'m Justin!'} />} />
      <Route path='/old' element={<Page component={PageOldHome} title={'hello, i\'m justin!'} />} />
      <Route path='/old/etc' element={<Page component={PageOldEtc} title={'justinf.dev: etc'} />} />
    </Routes>
  );
}

export default App;