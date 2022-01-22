import HomeView from '../../views/HomeView';
import ResumeView from '../../views/ResumeView';
import PortfolioView from '../../views/PortfolioView';
import AboutView from '../../views/AboutView';
import ContactView from '../../views/ContactView';
import ErrorView from '../../views/ErrorView';
import PrivacyView from '../../views/PrivacyView';
import FrontendMentorView from '../../views/project/FrontendMentorView';
import NewSiteView from '../../views/project/NewSiteView';
import ThuView from '../../views/project/ThuView';
import LBTCView from '../../views/project/LBTCView';
import YelpCamp from '../../views/project/YelpCamp';
import FirstSiteView from '../../views/project/FirstSiteView';
import KrakenBracketView from '../../views/project/KrakenBracketView';
import SIMDView from '../../views/project/SIMDView';
import ProbAndStatsView from '../../views/project/ProbAndStatsView';

const ROUTES = [
  { path: '/', exact: true, key: 'Home', component: HomeView },
  { path: '/resume', key: 'Resume', component: ResumeView },
  { path: '/portfolio', key: 'Portfolio', component: PortfolioView },
  { path: '/about', key: 'About', component: AboutView },
  { path: '/contact', key: 'Contact', component: ContactView },
  { path: '/privacy-policy', key: 'Privacy Policy', component: PrivacyView },
  {
    path: '/frontend-mentor-challenges',
    key: 'Frontend Mentor Challenges',
    component: FrontendMentorView,
  },
  { path: '/new-site', key: 'New Website', component: NewSiteView },
  { path: '/thu-nguyen', key: 'Thu Nguyen', component: ThuView },
  { path: '/csulb-tzu-ching', key: 'CSULB Tzu Ching', component: LBTCView },
  { path: '/yelpcamp', key: 'YelpCamp', component: YelpCamp },
  { path: '/first-site', key: 'First Site', component: FirstSiteView },
  {
    path: '/kraken-bracket',
    key: 'Kraken Bracket',
    component: KrakenBracketView,
  },
  { path: '/simd', key: 'SIMD', component: SIMDView },
  {
    path: '/probability-stats',
    key: 'Probability and Stats',
    component: ProbAndStatsView,
  },
  { path: '*', key: 'Error', component: ErrorView },
];

export default ROUTES;
