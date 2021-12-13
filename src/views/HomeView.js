import { Container } from '@mui/material';

import Passion from '../components/Home/Passion';
import RecentProjects from '../components/Home/RecentProjects';
import WebCardList from '../components/Home/WebCardList';
import Jumbotron from '../components/UI/Jumbotron';

const HomeView = () => {
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1620240501/BEN_Website/jumbotron/BEN_weekofwelcome_dtbkcj.jpg';
  const jumboTitle = 'Frontend Web Developer';

  return (
    <div className='home'>
      <Jumbotron image={jumboImage} title={jumboTitle} />
      <Container>
        <Passion />
        <WebCardList />
        <RecentProjects />
      </Container>
    </div>
  );
};

export default HomeView;
