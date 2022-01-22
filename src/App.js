import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/UI/Footer/Footer';
import PrivacyDialog from './components/Privacy/Dialog/PrivacyDialog';
import RenderRoutes from './components/Router/RenderRoutes';
import './App.css';

import ScrollToTop from './components/Helper/ScrollToTop';

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
