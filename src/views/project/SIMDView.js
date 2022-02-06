import { Container } from '@mui/material';
import { SIMDData } from '../../components/Helper/JumbotronData';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Button from '../../components/UI/Button/Button';
import './ProjectView.css';

const SIMDView = () => {
  const jumboTitle = SIMDData.title;
  TitleChange('SIMD Enhanced MIPS Instructions | BEN');

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            SIMD Enhanced MIPS Instructions
          </span>{' '}
          is a custom instruction set architecture (ISA) that utilizes the
          million instructions per second (MIPS) ISA. This process is documented
          in the Programmers' Reference Manual (100+ pages) which provides an
          in-depth understanding of computer architecture. All instructions are
          written in assembly code
        </p>

        <div>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/SIMD-Enhanced-MIPS-Instructions/blob/master/SMID-Enhanced-MIPS-Instructions.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <Button>View Documentation</Button>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/SIMD-Enhanced-MIPS-Instructions'
              target='_blank'
              rel='noreferrer'
            >
              <Button>View Repository</Button>
            </a>
          </p>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/v1620240514/BEN_Website/projects/simd_ndwgst.jpg'
            className='project-view__image'
            alt=''
          />
        </div>
      </Container>
    </div>
  );
};

export default SIMDView;
