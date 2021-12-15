import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const ThuView = () => {
  const jumboTitle = "Thu Nguyen's Website";

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md' className='thu-website'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>Thu Nguyen</span>{' '}
          is currently a college student studying at Cypress College. She plans
          to transfer to Califonia State University, Fullerton to pursue a
          Bachelor's in Accounting. This website is made to get to know more
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
            <a href='https://thuhnguyen.com/' target='_blank' rel='noreferrer'>
              <BtnStandard>View Website</BtnStandard>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/Thu-Website'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Repository</BtnStandard>
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
    </div>
  );
};

export default ThuView;
