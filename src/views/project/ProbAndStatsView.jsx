import React from 'react';

import PageContainer from '../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { ProbAndStatsJumboData } from '../../helper/JumbotronData';
import Button from '../../components/ui/button/Button';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import './ProjectView.css';

const ProbAndStatsView = ({ title }) => {
  const jumboTitle = ProbAndStatsJumboData.title;
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <AnimatedPage>
      <div>
        <Jumbotron title={jumboTitle} />
        <PageContainer maxWidth='md' href='/portfolio'>
          <p className='project-view__description'>
            The{' '}
            <span className='project-view__description__title'>
              EE 381 - Probability and Stats Computing
            </span>{' '}
            repository showcases all of my lab assignments from this class from
            my time at California State University, Long Beach. These lab
            assignments touch upon the following subjects:
            <ol>
              <li>Random Numbers and Stochastic Experiments</li>
              <li>Conditional Probabilities</li>
              <li>Binomial and Poisson Distributions</li>
              <li>Central Limit Theorem</li>
              <li>Confidence Intervals</li>
              <li>Markov Chains</li>
            </ol>
          </p>
          <p>
            Refer to each project folder to view in-depth documentation. All
            assignments are coded with Python
          </p>

          <div>
            <p>
              <a
                href='https://github.com/Buraiyen/EE-381'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-standard'>View Repository</Button>
              </a>
            </p>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1620240510/BEN_Website/projects/ee381_lkxiej.jpg'
              className='project-view__image'
              loading='lazy'
              alt=''
            />
          </div>
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default ProbAndStatsView;
