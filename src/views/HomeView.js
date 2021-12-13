import { Container } from '@mui/material';

import Passion from '../components/Home/Passion';
import RecentProjects from '../components/Home/RecentProjects';
import WebCardList from '../components/Home/WebCardList';

const HomeView = () => {
  return (
    <div className='home'>
      <Container>
        <Passion />
        <WebCardList />
        <RecentProjects />
      </Container>
    </div>
  );
};

export default HomeView;
