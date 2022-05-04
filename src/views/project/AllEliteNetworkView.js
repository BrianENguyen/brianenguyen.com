import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { AllEliteNetworkData } from '../../components/Helper/JumbotronData';
import { AllEliteNetworkPageTitle } from '../../components/Helper/PageTitleData';
import Button from '../../components/UI/Button/Button';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import './ProjectView.css';

const AllEliteNetworkView = () => {
  const jumboTitle = AllEliteNetworkData.title;
  useEffect(() => {
    document.title = AllEliteNetworkPageTitle;
  }, []);
  return (
    <AnimatedPage>
      <div className='old-site'>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md'>
          <p className='project-view__description'>
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
          </p>
          <div className='project-view__tech-stack'>
            <h2>Tech Stack</h2>
            <ul>
              <li>React.js</li>
              <li>SCSS</li>
              <li>React Router</li>
              <li>GraphQL (future plan)</li>
            </ul>
          </div>
          <div>
            <p>
              <a
                href='https://github.com/Brian-E-Nguyen/BEN-Website'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network1.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network2.png'
            className='project-view__image'
            alt=''
          />
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_991/v1651691316/BEN_Website/projects/all-elite-network3.png'
            className='project-view__image'
            alt=''
          />
        </Container>

        <Container>
          <div className='project-view__personal-notes'>
            <h2>Personal Notes</h2>
            <p></p>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default AllEliteNetworkView;
