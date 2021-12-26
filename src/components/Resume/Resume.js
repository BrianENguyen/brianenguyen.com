import { Container } from '@mui/material';

import ResumeTitle from './ResumeTitle';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeTitle />
      </Container>
    </div>
  );
};

export default Resume;
