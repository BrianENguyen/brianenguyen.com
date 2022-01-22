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
  { path: '/', exact: true, component: HomeView },
  { path: '/resume', component: ResumeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/about', component: AboutView },
  { path: '/privacy-policy', component: PrivacyView },
  { path: '/frontend-mentor-challenges', component: FrontendMentorView },
  { path: '/new-site', component: NewSiteView },
  { path: '/thu-nguyen', component: ThuView },
  { path: '/csulb-tzu-ching', component: LBTCView },
  { path: '/yelpcamp', component: YelpCamp },
  { path: '/first-site', component: FirstSiteView },
  { path: '/kraken-bracket', component: KrakenBracketView },
  { path: '/simd', component: SIMDView },
  { path: '/probability-stats', component: ProbAndStatsView },
  { path: '*', component: ErrorView },
];

export default ROUTES;
