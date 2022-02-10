import AboutView from '../../views/main/AboutView';
import ContactView from '../../views/main/ContactView';
import ErrorView from '../../views/main/ErrorView';
import HomeView from '../../views/main/HomeView';
import PortfolioView from '../../views/main/PortfolioView';
import PrivacyView from '../../views/main/PrivacyView';
import ResumeView from '../../views/main/ResumeView';
import BlogView from '../../views/main/BlogView';

import FirstSiteView from '../../views/project/FirstSiteView';
import FrontendMentorView from '../../views/project/FrontendMentorView';
import KrakenBracketView from '../../views/project/KrakenBracketView';
import LBTCView from '../../views/project/LBTCView';
import NewSiteView from '../../views/project/NewSiteView';
import ProbAndStatsView from '../../views/project/ProbAndStatsView';
import SIMDView from '../../views/project/SIMDView';
import ThuView from '../../views/project/ThuView';
import YelpCamp from '../../views/project/YelpCamp';

const ROUTES = [
  { path: '/', exact: true, key: 'Home', component: HomeView },
  { path: '/resume', key: 'Resume', component: ResumeView },
  { path: '/portfolio', key: 'Portfolio', component: PortfolioView },
  { path: '/blog', key: 'Blog', component: BlogView },

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
  { path: '/first-personal-site', key: 'First Site', component: FirstSiteView },
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
