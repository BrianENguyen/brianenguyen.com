import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const YelpCamp = () => {
  const jumboTitle = 'YelpCamp';
  TitleChange('YelpCamp | BEN');

  return (
    <div className='yelpcamp'>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>YelpCamp</span>,
          inspired by <em>Yelp</em>, is a user-friendly web-application that
          allows users to create and view various camping places from all over
          the world and to write reviews on them
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul>
            <li>Embedded JavaScript / CSS / JavaScript</li>
            <li>Bootstrap 5</li>
            <li>MongoDB</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div>
          <p>
            <a
              href='https://yelpcamp-brian-e-nguyen.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Website</BtnStandard>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/YelpCamp'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Repository</BtnStandard>
            </a>
          </p>
        </div>

        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/yelpcamp_collage_tarzq8.jpg'
          className='project-view__image'
          alt=''
        />
      </Container>
    </div>
  );
};

export default YelpCamp;
