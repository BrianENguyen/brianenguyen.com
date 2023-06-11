import React from 'react';

import { Container } from '@mui/material';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { YelpCampJumboData } from '../../helper/JumbotronData';
import { YelpCampPageTitle } from '../../helper/PageTitleData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';

const YelpCamp = () => {
  const jumboTitle = YelpCampJumboData.title;
  useEffect(() => {
    document.title = YelpCampPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='yelpcamp'>
        <Jumbotron title={jumboTitle} />
        <PageContainer maxWidth='md' href='/portfolio'>
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
                <Button className='btn-standard'>View Website</Button>
              </a>
            </p>
            <p>
              <a
                href='https://github.com/Buraiyen/YelpCamp'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>

          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/yelpcamp_collage_tarzq8.jpg'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default YelpCamp;
