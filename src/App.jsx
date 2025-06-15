import { useState } from 'react';
import SideNav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

