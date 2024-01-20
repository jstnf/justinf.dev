import { Routes, Route } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageOldHome from './pages/old/PageOldHome';
import PageOldEtc from './pages/old/PageOldEtc';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='' element={<Page component={PageHome} title={'Hello! I\'m Justin!'} />} />
      <Route path='/old' element={<Page component={PageOldHome} title={'hello, i\'m justin!'} />} />
      <Route path='/old/etc' element={<Page component={PageOldEtc} title={'justinf.dev: etc'} />} />
    </Routes>
  );
}

// Enable dynamic titles
const Page = (props) => {
  React.useEffect(() => {
    document.title = props.title;
  }, []);

  const PageComponent = props.component;
  return <PageComponent />;
}

export default App;