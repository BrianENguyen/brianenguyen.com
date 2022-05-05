import { Container } from '@mui/material';
import { useEffect } from 'react';
import { NewSiteData } from '../../helper/JumbotronData';
import { NewSitePageTitle } from '../../helper/PageTitleData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';

const NewSiteView = () => {
  const jumboTitle = NewSiteData.title;
  useEffect(() => {
    document.title = NewSitePageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='old-site'>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md'>
          <p className='project-view__description'>
            <span className='project-view__description__title'>
              My new website
            </span>{' '}
            is a redesigned and redeveloped version from my old one that was
            made back in 2020. This website has improved speed and improved UI /
            UX
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
                href='https://github.com/Buraiyen/BEN-Website-React'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default NewSiteView;
