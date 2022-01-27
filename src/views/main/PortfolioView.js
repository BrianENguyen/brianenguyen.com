import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import ProjectsList from '../../components/Projects/Main/ProjectsList';
import OtherProjectsList from '../../components/Projects/Other/OtherProjectsList';
import { PortfolioData } from '../../components/Helper/JumbotronData';

const PortfolioView = () => {
  const jumboText = PortfolioData.title;
  const jumboImage = PortfolioData.image;

  TitleChange('Portfolio | BEN');

  return (
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <Container maxWidth='xl'>
        <ProjectsList />
        <OtherProjectsList />
      </Container>
    </div>
  );
};

export default PortfolioView;
