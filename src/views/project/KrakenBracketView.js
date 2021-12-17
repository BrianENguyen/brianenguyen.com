import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const KrakenBracketView = () => {
  const jumboTitle = 'CSULB Tzu Ching';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'></span>
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul></ul>
        </div>
      </Container>
      <Container>
        <div className='project-view__personal-notes'></div>
      </Container>
    </div>
  );
};

export default KrakenBracketView;
