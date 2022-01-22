import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const NewSiteView = () => {
  const jumboTitle = 'My New Website';
  TitleChange('My New Website | BEN');

  return (
    <div className='old-site'>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            My new website
          </span>{' '}
          is a redesigned and redeveloped version from my old one that was made
          back in 2020. This website has improved speed and improved UI / UX
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Material UI</li>
          </ul>
        </div>

        <div>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/BEN-Website-React'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Repository</BtnStandard>
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NewSiteView;
