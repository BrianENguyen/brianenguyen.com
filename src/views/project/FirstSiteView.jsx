import React from 'react';

import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { FirstSiteJumboData } from '../../helper/JumbotronData';
import { FirstSitePageTitle } from '../../helper/PageTitleData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';

const FirstSiteView = () => {
  useEffect(() => {
    document.title = FirstSitePageTitle;
  }, []);

  const jumboTitle = FirstSiteJumboData.title;

  return (
    <AnimatedPage>
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
          <div>
            <p>
              <a
                href='https://github.com/Buraiyen/BEN-Website'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1639689243/BEN_Website/projects/firstsite-1_h2xzox.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1639689243/BEN_Website/projects/firstsite-2_ryw1ve.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1639689351/BEN_Website/projects/firstsite-3_ojidcq.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
        </Container>

        <Container>
          <div className='project-view__personal-notes'>
            <h2>Personal Notes</h2>
            <p>
              Creating this website was more than two years in the making. I
              started developing this back in 2019 with the concepts that I have
              learned from Colt Steele's Web Dev Bootcamp. The reason why this
              project took longer to complete was that I was eager to create my
              website midway through the course, so I used concepts that I
              already knew; however, I didn't know enough concepts to develop
              it, such as routing, file organization, components, and app
              deployment. This led me to become unmotivated to complete it
              sooner than I expected. I also had to take some time off from the
              boot camp to focus on my studies at CSULB.
            </p>
            <p>
              After I graduated in 2020, I wanted to finish the boot camp to
              gain more knowledge on web development. It was a difficult and
              time-consuming journey, but it was all worth it in the end. I took
              the new concepts that I've learned from that boot camp and
              completely reworked my website.
            </p>
            <p>
              I decided to retire this version of my website for many reasons.
              The biggest one is how slow this website performs without paid
              hosting. Since I did use traditional HTML files to markup my
              website, sending requests to the server every time when going to
              different pages will cause the website slow down. Switching to a
              front-end framework using the single-page-application architecture
              will not only make my website faster, but it will also cost me
              less money
            </p>
            <p>
              Other reasons for retiring this website include changing the
              design and removing some unnecessary content, like the Photography
              section
            </p>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default FirstSiteView;
