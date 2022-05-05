import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { PortfolioData } from '../../helper/JumbotronData';
import { PortfolioPageTitle } from '../../helper/PageTitleData';
import ProjectsList from '../../components/projects/main/ProjectsList';
import OtherProjectsList from '../../components/projects/other/OtherProjectsList';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const PortfolioView = () => {
  const jumboTitle = PortfolioData.title;
  const jumboImage = PortfolioData.image;

  useEffect(() => {
    document.title = PortfolioPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='portfolio'>
        <Jumbotron image={jumboImage} title={jumboTitle} />
        <Container maxWidth='xl'>
          <ProjectsList />
          <OtherProjectsList />
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default PortfolioView;
