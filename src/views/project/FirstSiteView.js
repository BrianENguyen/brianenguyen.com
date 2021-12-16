import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const FirstSiteView = () => {
  const jumboTitle = 'My First Personal Website';

  return (
    <div className='old-site'>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            My first personal website
          </span>{' '}
          is my first attempt at developing, designing, and hosting a website
          online. It features the same sections that you see on this website
          (minus Photography)
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul>
            <li>Embedded JavaScript / CSS</li>
            <li>Bootstrap 4</li>
            <li>Express.js</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FirstSiteView;
