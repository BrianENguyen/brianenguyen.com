import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { ResumeData } from '../../components/Helper/JumbotronData';
import { ResumePageTitle } from '../../components/Helper/PageTitleData';
import Resume from '../../components/Resume/Resume';
import Button from '../../components/UI/Button/Button';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const ResumeView = () => {
  useEffect(() => {
    document.title = ResumePageTitle;
  });

  const jumboTitle = ResumeData.title;
  const jumboImage = ResumeData.image;

  return (
    <AnimatedPage>
      <div style={{ marginBottom: 3 + 'rem' }}>
        <Jumbotron image={jumboImage} title={jumboTitle} />
        <center style={{ marginTop: 3 + 'rem' }}>
          <a
            href='https://u.pcloud.link/publink/show?code=XZmLriXZ5s0NbDhswCX93zpTdtz505tY8ARX'
            target='_blank'
            rel='noreferrer'
          >
            <Button className='btn-standard'>Download Resume</Button>
          </a>
        </center>
        <Resume />
        <center>
          <a
            href='https://u.pcloud.link/publink/show?code=XZmLriXZ5s0NbDhswCX93zpTdtz505tY8ARX'
            target='_blank'
            rel='noreferrer'
          >
            <Button className='btn-standard'>Download Resume</Button>
          </a>
        </center>
      </div>
    </AnimatedPage>
  );
};

export default ResumeView;
