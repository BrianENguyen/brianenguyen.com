import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { HomeData } from '../../helper/JumbotronData';
import { HomePageTitle } from '../../helper/PageTitleData';
import Passion from '../../components/home/Passion';
import WebCardList from '../../components/home/WebCardList';
import RecentProjectList from '../../components/projects/main/RecentProjectList';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';

const HomeView = () => {
  useEffect(() => {
    document.title = HomePageTitle;
  }, []);

  const jumboImage = HomeData.image;
  const jumboTitle = HomeData.title;
  const jumboDescription = HomeData.description;

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
};

export default HomeView;
