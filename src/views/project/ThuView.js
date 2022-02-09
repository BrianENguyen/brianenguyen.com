import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { ThuData } from '../../components/Helper/JumbotronData';
import { ThuPageTitle } from '../../components/Helper/PageTitleData';
import Button from '../../components/UI/Button/Button';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import './ProjectView.css';

const ThuView = () => {
  const jumboTitle = ThuData.title;
  useEffect(() => {
    document.title = ThuPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md' className='thu-website'>
          <p className='project-view__description'>
            <span className='project-view__description__title'>Thu Nguyen</span>{' '}
            is currently a college student studying at Cypress College. She
            plans to transfer to Califonia State University, Fullerton to pursue
            a Bachelor's in Accounting. This website is made to get to know more
            about her, view her resume, and get in contact with her
          </p>
          <div className='project-view__tech-stack'>
            <h2>Tech Stack</h2>
            <ul>
              <li>React</li>
              <li>Material UI</li>
              <li>React Router</li>
            </ul>
          </div>

          <div>
            <p>
              <a
                href='https://thuhnguyen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Website</Button>
              </a>
            </p>
            <p>
              <a
                href='https://github.com/Brian-E-Nguyen/Thu-Website'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>

          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1639545745/BEN_Website/projects/thuhnguyen_cov4jp.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1639545839/BEN_Website/projects/thuhnguyenresume_xmwppk.png'
            className='project-view__image'
            alt=''
          />
        </Container>
        <Container>
          <div className='project-view__personal-notes'>
            <h2>Personal Notes</h2>
            <p>
              This is the first project that I've built with React. Although
              this project is small, I did learn a lot about React from it. The
              main challenge for me was using states, which I have implemented
              in the navbar. I used states in it to control when it is in mobile
              view, when it should change its background color depending on the
              screen size or the Y position of the site, etc.
            </p>
            <p>Overall, it was fun introduction to React</p>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default ThuView;
