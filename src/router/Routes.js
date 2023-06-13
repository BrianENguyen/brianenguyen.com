// Main views
import AboutView from '../views/main/about/AboutView';
import ContactView from '../views/main/contact/ContactView';
import ErrorView from '../views/main/error/ErrorView';
import HomeView from '../views/main/home/HomeView';
import PortfolioView from '../views/main/portfolio/PortfolioView';
import PrivacyView from '../views/main/privacy/PrivacyView';
import BlogView from '../views/main/blog/BlogView';

// Project views
import FirstSiteView from '../views/project/FirstSiteView';
import KrakenBracketView from '../views/project/KrakenBracketView';
import LBTCView from '../views/project/LBTCView';
import NewSiteView from '../views/project/NewSiteView';
import ProbAndStatsView from '../views/project/ProbAndStatsView';
import SIMDView from '../views/project/SIMDView';
import ThuView from '../views/project/ThuView';
import YelpCamp from '../views/project/YelpCamp';
import AllEliteNetworkView from '../views/project/AllEliteNetworkView';

// Blog views
import BlogPostView from '../views/blog-post/BlogPostView';

const suffix = '| BEN';

const ROUTES = [
  {
    path: '/',
    key: 'Home',
    component: HomeView,
    props: {
      title: 'Brian E. Nguyen | Software Developer',
    },
  },
  {
    path: '/portfolio',
    key: 'Portfolio',
    component: PortfolioView,
    props: {
      title: `Portfolio ${suffix}`,
    },
  },
  {
    path: '/blog',
    key: 'Blog',
    component: BlogView,
    props: {
      title: `Blog ${suffix}`,
    },
  },
  {
    path: '/blog/optimizing-images',
    key: 'Optimizing Images',
    component: BlogPostView,
    props: {
      title: `Blog ${suffix}`,
      markdownFile: 'optimizing-images',
    },
  },
  {
    path: '/blog/why-i-blog',
    key: 'Why I Blog',
    component: BlogPostView,
    props: {
      title: `Why I'm Blogging ${suffix}`,
      markdownFile: 'why-i-blog',
    },
  },
  {
    path: '/blog/volunteering-with-tzu-chi',
    key: 'Volunteering with Tzu Chi',
    component: BlogPostView,
    props: {
      title: `Volunteering with the Tzu Chi Foundation ${suffix}`,
      markdownFile: 'volunteering-tzu-chi',
    },
  },
  {
    path: '/blog/blogging-with-org-mode',
    key: 'Writing Blogs with Org Mode',
    component: BlogPostView,
    props: {
      title: `Writing Blogs with Org Mode ${suffix}`,
      markdownFile: 'blogging-with-org-mode',
    },
  },
  {
    path: '/blog/programming-history',
    key: 'Programming History',
    component: BlogPostView,
    props: {
      title: `My Programming History ${suffix}`,
      markdownFile: 'programming-history',
    },
  },
  {
    path: '/about',
    key: 'About',
    component: AboutView,
    props: {
      title: `About ${suffix}`,
    },
  },
  {
    path: '/contact',
    key: 'Contact',
    component: ContactView,
    props: {
      title: `Contact ${suffix}`,
    },
  },
  {
    path: '/privacy-policy',
    key: 'Privacy Policy',
    component: PrivacyView,
    props: {
      title: `Privacy Policy ${suffix}`,
    },
  },
  {
    path: '/portfolio/new-site',
    key: 'New Website',
    component: NewSiteView,
    props: {
      title: `My New Site ${suffix}`,
    },
  },
  {
    path: '/portfolio/thu-nguyen',
    key: 'Thu Nguyen',
    component: ThuView,
    props: {
      title: `Thu Nguyen's Site ${suffix}`,
    },
  },
  {
    path: '/portfolio/all-elite-network',
    key: 'All Elite Network',
    component: AllEliteNetworkView,
    props: {
      title: `All Elite Network ${suffix}`,
    },
  },
  {
    path: '/portfolio/csulb-tzu-ching',
    key: 'CSULB Tzu Ching',
    component: LBTCView,
    props: {
      title: `CSULB Tzu Ching ${suffix}`,
    },
  },
  {
    path: '/portfolio/yelpcamp',
    key: 'YelpCamp',
    component: YelpCamp,
    props: {
      title: `YelpCamp ${suffix}`,
    },
  },
  {
    path: '/portfolio/first-personal-site',
    key: 'First Site',
    component: FirstSiteView,
    props: {
      title: `My First Site ${suffix}`,
    },
  },
  {
    path: '/portfolio/kraken-bracket',
    key: 'Kraken Bracket',
    component: KrakenBracketView,
    props: {
      title: `Kraken Bracket ${suffix}`,
    },
  },
  {
    path: '/portfolio/simd',
    key: 'SIMD',
    component: SIMDView,
    props: {
      title: `SIMD ${suffix}`,
    },
  },
  {
    path: '/portfolio/probability-stats',
    key: 'Probability and Stats',
    component: ProbAndStatsView,
    props: {
      title: `Probability and Stats ${suffix}`,
    },
  },
  {
    path: '*',
    key: 'Error',
    component: ErrorView,
    props: {
      title: `404 ${suffix}`,
    },
  },
];

export default ROUTES;
