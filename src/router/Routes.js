import AboutView from '../views/main/About/AboutView';
import ContactView from '../views/main/Contact/ContactView';
import ErrorView from '../views/main/Error/ErrorView';
import HomeView from '../views/main/Home/HomeView';
import PortfolioView from '../views/main/Portfolio/PortfolioView';
import PrivacyView from '../views/main/Privacy/PrivacyView';
import BlogView from '../views/main/Blog/BlogView';

import FirstSiteView from '../views/project/FirstSiteView';
import KrakenBracketView from '../views/project/KrakenBracketView';
import LBTCView from '../views/project/LBTCView';
import NewSiteView from '../views/project/NewSiteView';
import ProbAndStatsView from '../views/project/ProbAndStatsView';
import SIMDView from '../views/project/SIMDView';
import ThuView from '../views/project/ThuView';
import YelpCamp from '../views/project/YelpCamp';
import AllEliteNetworkView from '../views/project/AllEliteNetworkView';

import OptimizingImages from '../views/blog/OptimizingImages';
import WhyBlogView from '../views/blog/WhyBlogView';
import MyProgrammingHistoryView from '../views/blog/MyProgrammingHistoryView';
import VolunteeringTC from '../views/blog/VolunteeringTC';

const ROUTES = [
  { path: '/', key: 'Home', component: HomeView },
  { path: '/portfolio', key: 'Portfolio', component: PortfolioView },
  { path: '/blog', key: 'Blog', component: BlogView },
  {
    path: '/blog/optimizing-images',
    key: 'Optimizing Images',
    component: OptimizingImages,
  },
  {
    path: '/blog/why-i-blog',
    key: 'Why I Blog',
    component: WhyBlogView,
  },
  {
    path: '/blog/volunteering-with-tzu-chi',
    key: 'Volunteering with Tzu Chi',
    component: VolunteeringTC,
  },

  {
    path: '/blog/programming-history',
    key: 'Programming History',
    component: MyProgrammingHistoryView,
  },

  { path: '/about', key: 'About', component: AboutView },
  { path: '/contact', key: 'Contact', component: ContactView },
  { path: '/privacy-policy', key: 'Privacy Policy', component: PrivacyView },
  { path: '/portfolio/new-site', key: 'New Website', component: NewSiteView },
  { path: '/portfolio/thu-nguyen', key: 'Thu Nguyen', component: ThuView },
  {
    path: '/portfolio/all-elite-network',
    key: 'All Elite Network',
    component: AllEliteNetworkView,
  },
  {
    path: '/portfolio/csulb-tzu-ching',
    key: 'CSULB Tzu Ching',
    component: LBTCView,
  },
  { path: '/portfolio/yelpcamp', key: 'YelpCamp', component: YelpCamp },
  {
    path: '/portfolio/first-personal-site',
    key: 'First Site',
    component: FirstSiteView,
  },
  {
    path: '/portfolio/kraken-bracket',
    key: 'Kraken Bracket',
    component: KrakenBracketView,
  },
  { path: '/portfolio/simd', key: 'SIMD', component: SIMDView },
  {
    path: '/portfolio/probability-stats',
    key: 'Probability and Stats',
    component: ProbAndStatsView,
  },
  { path: '*', key: 'Error', component: ErrorView },
];

export default ROUTES;
