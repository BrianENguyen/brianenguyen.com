import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import Jumbotron from '../../components/UI/Jumbotron';

const FrontendMentorView = () => {
  TitleChange('Frontend Mentor Challenges | BEN');

  const jumboTitle = 'Frontend Mentor Challenges';

  return (
    <div className='frontend-mentor'>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            Frontend Mentor
          </span>{' '}
          is an website that helps individuals gain experience of building
          websites and providing code reviews. The website and repository below
          are challenges that I have attempted that were provided from Frontend
          Mentor. All challenges are solved using vanilla HTML, CSS, and
          JavaScript. No frontend frameworks or libraries (with the exception of
          using icons) are used.
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
              href='https://github.com/Brian-E-Nguyen/BEN-Website'
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

export default FrontendMentorView;
