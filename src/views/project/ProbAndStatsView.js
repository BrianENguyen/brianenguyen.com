import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const ProbAndStatsView = () => {
  const jumboTitle = 'EE 381 - Probability and Stats Computing';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          The{' '}
          <span className='project-view__description__title'>
            EE 381 - Probability and Stats Computing
          </span>{' '}
          repository showcases all of my lab assignments from this class from my
          time at California State University, Long Beach. These lab assignments
          touch upon the following subjects:
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
              href='https://github.com/Brian-E-Nguyen/SIMD-Enhanced-MIPS-Instructions/blob/master/SMID-Enhanced-MIPS-Instructions.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Documentation</BtnStandard>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/SIMD-Enhanced-MIPS-Instructions'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Repository</BtnStandard>
            </a>
          </p>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/simd_ndwgst.jpg'
            className='project-view__image'
          />
        </div>
      </Container>
    </div>
  );
};

export default ProbAndStatsView;
