import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Passion from '../../components/Home/Passion';
import RecentProjectList from '../../components/Projects/Main/RecentProjectList';
import WebCardList from '../../components/Home/WebCardList';

const HomeView = () => {
  TitleChange('Brian E. Nguyen');

  // TODO: change jumbo image to me coding
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1620240501/BEN_Website/jumbotron/BEN_weekofwelcome_dtbkcj.jpg';
  const jumboTitle = 'Brian E. Nguyen';
  const jumboDescription =
    '2020 Computer Science Graduate and Aspiring Front-end Developer';

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
