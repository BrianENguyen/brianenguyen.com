import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import PortfolioView from './views/PortfolioView';
import ResumeView from './views/ResumeView';
import ContactView from './views/ContactView';
import ErrorView from './views/ErrorView';
import NewSiteView from './views/project/NewSiteView';
import ThuView from './views/project/ThuView';
import LBTCView from './views/project/LBTCView';
import YelpCamp from './views/project/YelpCamp';
import FirstSiteView from './views/project/FirstSiteView';
import KrakenBracketView from './views/project/KrakenBracketView';
import SIMDView from './views/project/SIMDView';
import ProbAndStatsView from './views/project/ProbAndStatsView';
import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/UI/Footer/Footer';
import './App.css';

import ScrollToTop from './components/Helper/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={HomeView} />
          <Route path='/about' component={AboutView} />
          <Route path='/portfolio' component={PortfolioView} />
          <Route path='/resume' component={ResumeView} />
          <Route path='/contact' component={ContactView} />
          <Route path='/new-site' component={NewSiteView} />
          <Route path='/thu-nguyen' component={ThuView} />
          <Route path='/csulb-tzu-ching' component={LBTCView} />
          <Route path='/yelpcamp' component={YelpCamp} />
          <Route path='/first-personal-site' component={FirstSiteView} />
          <Route path='/kraken-bracket' component={KrakenBracketView} />
          <Route path='/simd' component={SIMDView} />
          <Route path='/probability-stats' component={ProbAndStatsView} />
          <Route path='*' component={ErrorView} />
        </Switch>
      </header>
      <Footer />
    </div>
  );
}

export default App;
