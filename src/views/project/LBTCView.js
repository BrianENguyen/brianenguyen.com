import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const LBTCView = () => {
  const jumboTitle = 'CSULB Tzu Ching';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md' className='thu-website'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            CSULB Tzu Ching
          </span>{' '}
          is a volunteering organization at Califonia State University, Long
          Beach that focuses on charity, medicine, education, and humanistic
          culture. It is the collegiate chapter of its mother organization: The
          Tzu Chi Foundation. This website showcases information about the
          organization, recent and upcoming volunteering events, board members,
          and photos
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul>
            <li>Vue.js</li>
            <li>Vuetify</li>
            <li>Animate.css</li>
            <li>Animate on Scroll (AOS)</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default LBTCView;
