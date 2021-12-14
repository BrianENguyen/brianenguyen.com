import { Container } from '@mui/material';

import Jumbotron from '../components/UI/Jumbotron';
import Passion from '../components/Home/Passion';
import RecentProjects from '../components/Home/RecentProjects/RecentProjects';
import WebCardList from '../components/Home/WebCardList';

const HomeView = () => {
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1620240501/BEN_Website/jumbotron/BEN_weekofwelcome_dtbkcj.jpg';
  const jumboTitle = 'Brian E. Nguyen';
  const jumboLogo = (
    <img
      className='jumbotron__logo'
      src='https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-transparent_rintta.png'
      alt=''
    />
  );
  const onHomeView = true;

  return (
    <div className='home'>
      <Jumbotron
        image={jumboImage}
        title={jumboTitle}
        logo={jumboLogo}
        homeView={onHomeView}
      />
      <Container maxWidth='xl'>
        <Passion />
        <WebCardList />
        <RecentProjects />
      </Container>
    </div>
  );
};

export default HomeView;
