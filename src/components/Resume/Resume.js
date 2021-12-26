import { Container } from '@mui/material';

import ResumeTitle from './ResumeTitle';
import ResumeEducation from './ResumeEducation';
import ResumeProjects from './ResumeProjects';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeTitle />
        <ResumeEducation />
        <ResumeProjects />
      </Container>
    </div>
  );
};

export default Resume;
