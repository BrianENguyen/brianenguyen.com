import './App.css';
import ScrollToTop from './helper/ScrollToTop';
import PrivacyDialog from './components/privacy/dialog/PrivacyDialog';
import RenderRoutes from './components/router/RenderRoutes';
import Footer from './components/UI/Footer/Footer';
import Navbar from './components/UI/Navbar/Navbar';

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
