import { Container } from '@mui/material';
import { PortfolioData } from '../../components/Helper/JumbotronData';
import { TitleChange } from '../../components/Helper/TitleChange';
import ProjectsList from '../../components/Projects/Main/ProjectsList';
import OtherProjectsList from '../../components/Projects/Other/OtherProjectsList';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const PortfolioView = () => {
  const jumboTitle = PortfolioData.title;
  const jumboImage = PortfolioData.image;

  TitleChange('Portfolio | BEN');

  return (
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboTitle} />
      <Container maxWidth='xl'>
        <ProjectsList />
        <OtherProjectsList />
      </Container>
    </div>
  );
};

export default PortfolioView;
