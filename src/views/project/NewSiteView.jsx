import React from 'react';

import PageContainer from '../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import { NewSiteJumboData } from '../../helper/JumbotronData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';

const NewSiteView = ({ title }) => {
  const jumboTitle = NewSiteJumboData.title;
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <AnimatedPage>
      <div className='old-site'>
        <Jumbotron title={jumboTitle} />

        <PageContainer maxWidth='md' href='/portfolio'>
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
                href='https://github.com/Buraiyen/brianenguyen.com'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
          </div>
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default NewSiteView;
