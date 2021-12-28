import { Container } from '@mui/material';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const LBTCView = () => {
  const jumboTitle = 'CSULB Tzu Ching';
  TitleChange('CSULB Tzu Ching | BEN');

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
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

        <div>
          <p>
            <a
              href='https://csulbtzuching.org/'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Website</BtnStandard>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/Brian-E-Nguyen/CSULB-TC-Website'
              target='_blank'
              rel='noreferrer'
            >
              <BtnStandard>View Repository</BtnStandard>
            </a>
          </p>
        </div>

        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639631256/BEN_Website/projects/lbtc-1_vce5f3.png'
          className='project-view__image'
          alt=''
        />
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639631255/BEN_Website/projects/lbtc-2_qswy3x.png'
          className='project-view__image'
          alt=''
        />
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639631255/BEN_Website/projects/lbtc-3_o9vuoo.png'
          className='project-view__image'
          alt=''
        />
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639631255/BEN_Website/projects/lbtc-4_avdwjd.png'
          className='project-view__image'
          alt=''
        />
      </Container>
      <Container>
        <div className='project-view__personal-notes'>
          <h2>Personal Notes</h2>
          <p>
            I've always wanted to develop this website ever since I have started
            my computer science degree so that I can both promote this
            organization and improve my programming skills
          </p>
          <p>
            I have actually attempted to develop this website sometime around
            2018, but I eventually gave up on it because, just like with my main
            website, I have started to build this when I had very limited
            knowledge on front-end development
          </p>
          <p>
            Frontend-wise, this is the biggest project that I have done in Vue.
            Working with a front-end JavaScript framework like Vue makes me
            appreciate them on how simple it is to create websites through the
            use of components and other libraries
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LBTCView;
