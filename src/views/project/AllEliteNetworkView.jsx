import React from 'react';

import PageContainer from '../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { AllEliteNetworkJumboData } from '../../helper/JumbotronData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';

const AllEliteNetworkView = ({ titlee }) => {
  const jumboTitle = AllEliteNetworkJumboData.title;
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <AnimatedPage>
      <div className='old-site'>
        <Jumbotron title={jumboTitle} />
        <PageContainer maxWidth='md' href='/portfolio'>
          <div className='project-view__description'>
            <p>
              All Elite Wrestling (AEW) is an American wrestling company based
              in Jacksonville, Florida. Since its inception in 2019, AEW has
              changed the landscape of professional wrestling. It provided a
              great alternative for new and old wrestling fans, and is
              considered the second largest professional wrestling company
              behind Word Wrestling Entertainment (WWE).
            </p>
            <p>
              For years, fans have been wanting a streaming service that
              provides convenient access to live shows and archived content;
              this includes AEW's quarterly Pay-Per Views, weekly TV shows
              (Dynamite and Rampage), and weekly YouTube shows (Dark and Dark
              Elevation)
            </p>
            <span className='project-view__description__title'>
              The All Elite Network
            </span>{' '}
            is the ultimate unofficial streaming service for fans of All Elite
            Wrestling to access the AEW library of amazing content. This project
            is currently a work in progress.
          </div>
          <div className='project-view__tech-stack'>
            <h2>Tech Stack</h2>
            <ul>
              <li>React.js</li>
              <li>SCSS</li>
              <li>React Router</li>
              <li>Future Plans</li>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </ul>
          </div>
          <div style={{ marginBottom: 15 + 'px' }}>
            <p>
              <a
                href='https://github.com/Buraiyen/All-Elite-Network'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
            <a
              href='https://all-elite-network.pages.dev/'
              target='_blank'
              rel='noreferrer'
            >
              <Button className='btn-standard'>View Website</Button>
            </a>
          </div>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network1.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network2.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network3.png'
            className='project-view__image'
            loading='lazy'
            alt=''
          />

          <div className='project-view__personal-notes'>
            <h2>Personal Notes</h2>
            <p>
              Watching professional wrestling is one of my biggest passions. I
              have been an active fan of AEW since its start in 2019, and it has
              made me proud to be a wrestling fan. One of the most requested
              things that AEW fans have requested is a streaming platform. I
              wanted to make this app as a design mockup for what the streaming
              platform might look like. I am still hoping there will be an
              official app in the future.
            </p>
          </div>
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default AllEliteNetworkView;
