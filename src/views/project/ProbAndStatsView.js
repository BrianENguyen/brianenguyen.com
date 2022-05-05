import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { ProbAndStatsData } from '../../helper/JumbotronData';
import { ProbAndStatsPageTitle } from '../../helper/PageTitleData';
import Button from '../../components/UI/Button/Button';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import './ProjectView.css';

const ProbAndStatsView = () => {
  const jumboTitle = ProbAndStatsData.title;
  useEffect(() => {
    document.title = ProbAndStatsPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div>
        <Jumbotron title={jumboTitle} />
        <Container maxWidth='md'>
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
              alt=''
            />
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default ProbAndStatsView;
