import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { PortfolioJumboData } from '../../helper/JumbotronData';
import { PortfolioPageTitle } from '../../helper/PageTitleData';
import ProjectsList from '../../components/projects/main/ProjectsList';
import OtherProjectsList from '../../components/projects/other/OtherProjectsList';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';

const PortfolioView = () => {
  const jumboTitle = PortfolioJumboData.title;
  const jumboImage = PortfolioJumboData.src;

  useEffect(() => {
    document.title = PortfolioPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='portfolio'>
        <Jumbotron src={jumboImage} title={jumboTitle} />
        <Container maxWidth='xl'>
          <ProjectsList />
          <OtherProjectsList />
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default PortfolioView;
