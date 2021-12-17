import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const SIMDView = () => {
  const jumboTitle = 'SIMD Enhanced MIPS Instructions';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            SIMD Enhanced MIPS Instructions
          </span>
          is a custom instruction set architecture (ISA) that utilizes the
          million instructions per second (MIPS) ISA. This process is documented
          in the Programmers' Reference Manual which provides an in-depth
          understanding of computer architecture.
        </p>

        <div>
          <p>
            <a href='' target='_blank' rel='noreferrer'>
              <BtnStandard>View Documentation</BtnStandard>
            </a>
          </p>
          <p>
            <a href='' target='_blank' rel='noreferrer'>
              <BtnStandard>View Repository</BtnStandard>
            </a>
          </p>
        </div>
      </Container>
      <Container>
        <div className='project-view__personal-notes'></div>
      </Container>
    </div>
  );
};

export default SIMDView;
