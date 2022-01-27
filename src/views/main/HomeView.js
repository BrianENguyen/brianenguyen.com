import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Passion from '../../components/Home/Passion';
import RecentProjectList from '../../components/Projects/Main/RecentProjectList';
import WebCardList from '../../components/Home/WebCardList';
import { HomeData } from '../../components/Helper/JumbotronData';

const HomeView = () => {
  TitleChange('Brian E. Nguyen');

  const jumboImage = HomeData.image;
  const jumboTitle = HomeData.title;
  const jumboDescription = HomeData.description;

  return (
    <div className='home'>
      <Jumbotron
        image={jumboImage}
        title={jumboTitle}
        description={jumboDescription}
      />
      <Container maxWidth='xl'>
        <Passion />
        <WebCardList />
        <RecentProjectList />
      </Container>
    </div>
  );
};

export default HomeView;
