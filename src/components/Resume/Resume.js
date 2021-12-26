import { Container } from '@mui/material';

import ResumeTitle from './ResumeTitle';
import ResumeEducation from './ResumeEducation';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeTitle />
        <ResumeEducation />
      </Container>
    </div>
  );
};

export default Resume;
