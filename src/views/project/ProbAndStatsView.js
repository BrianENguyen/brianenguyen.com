import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const ProbAndStatsView = () => {
  const jumboTitle = 'EE 381 - Probability and Stats';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'></span>{' '}
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
