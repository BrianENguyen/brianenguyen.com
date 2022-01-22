import { Container } from '@mui/material';
import { TitleChange } from '../components/Helper/TitleChange';
import Jumbotron from '../components/UI/Jumbotron/Jumbotron';
import ProjectsList from '../components/Projects/ProjectsList';
import OtherProjectsList from '../components/Projects/Other/OtherProjectsList';

const PortfolioView = () => {
  const jumboText = 'Portfolio';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240500/BEN_Website/jumbotron/BEN_code_hijtco.jpg';

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
