import React from 'react';

import Header from '../components/component_header';
import NavbarComponent from '../components/component_navbar';
import Footer from '../components/component_footer';

import TempBodyComponent from '../components/component_tempbody';

class PageHome extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavbarComponent />
        <TempBodyComponent />
        <Footer />
      </>
    );
  }
}

export default PageHome;