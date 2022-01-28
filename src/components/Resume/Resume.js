import { Container } from '@mui/material';
import './Resume.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeLeadership from './ResumeLeadership';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';
import ResumeSpecialization from './ResumeSpecialization';
import ResumeTitle from './ResumeTitle';

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <ResumeTitle />
        <ResumeEducation />
        <ResumeExperience />
        <ResumeProjects />
        <ResumeSkills />
        <ResumeSpecialization />
        <ResumeLeadership />
      </Container>
    </div>
  );
};

export default Resume;
