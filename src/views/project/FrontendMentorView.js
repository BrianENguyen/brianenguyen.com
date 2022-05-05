import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { FrontendMentorData } from '../../helper/JumbotronData';
import { FrontendMentorPageTitle } from '../../helper/PageTitleData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';

const FrontendMentorView = () => {
  const jumboTitle = FrontendMentorData.title;

  useEffect(() => {
    document.title = FrontendMentorPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='frontend-mentor'>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md'>
          <p className='project-view__description'>
            <span className='project-view__description__title'>
              Frontend Mentor
            </span>{' '}
            (<a href='https://www.frontendmentor.io/'>frontendmentor.io</a>) is
            a website that helps individuals gain experience of building
            websites and providing code reviews. The website and repository
            below are challenges that I have attempted that were provided from
            Frontend Mentor. All challenges are solved using vanilla HTML, CSS,
            and JavaScript. No frontend frameworks or libraries (with the
            exception of icons) are used.
          </p>
          <div className='project-view__tech-stack'>
            <h2>Tech Stack</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <p>
              <a
                href='https://github.com/Buraiyen/frontend-mentor-challenges'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
            <p>
              <a
                href='https://frontend-mentor-challenges.pages.dev/'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Deployed App</Button>
              </a>
            </p>
          </div>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_914/v1642029333/BEN_Website/projects/frontendmentor1_jctzjw.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_914/v1642029333/BEN_Website/projects/frontendmentor2_rmy98h.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_914/v1642029333/BEN_Website/projects/frontendmentor3_q1azoi.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_914/v1642029333/BEN_Website/projects/frontendmentor4_azhyvp.png'
            className='project-view__image'
            alt=''
          />
          <div className='project-view__personal-notes'>
            <h2>Personal Notes:</h2>
            <p>
              I sincerely appreciate doing these challenges because they not
              only help me brush up on my front-end skills, but they also make
              me learn new techniques, like grid, transitions, relative and
              absolute positioning, etc.
            </p>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FrontendMentorView;
