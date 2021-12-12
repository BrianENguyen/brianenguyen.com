import { Container } from '@mui/material';

import Quote from '../components/Home/Quote';
import Passion from '../components/Home/Passion';
import Skillset from '../components/Home/Skillset';
import Tools from '../components/Home/Tools';
import WebCardList from '../components/Home/WebCardList';

const HomeView = () => {
  return (
    <div className='home'>
      <Container>
        <Quote />
        <Passion />
        <Skillset />
        <Tools />
        <WebCardList />
      </Container>
    </div>
  );
};

export default HomeView;
