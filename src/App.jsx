import React from 'react';
import './App.css';
import ScrollToTop from './helper/ScrollToTop';
import PrivacyDialog from './components/privacy/dialog/PrivacyDialog';
import RenderRoutes from './router/RenderRoutes';
import Footer from './components/ui/footer/Footer';
import Navbar from './components/ui/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <ScrollToTop />
        <RenderRoutes />
      </header>
      <PrivacyDialog />
      <Footer />
    </div>
  );
}

export default App;
