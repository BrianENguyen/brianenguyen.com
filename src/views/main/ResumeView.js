import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import Resume from '../../components/Resume/Resume';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import { TitleChange } from '../../components/Helper/TitleChange';
import { ResumeData } from '../../components/Helper/JumbotronData';

const ResumeView = () => {
  TitleChange('Resume | BEN');

  const jumboTitle = ResumeData.title;
  const jumboImage = ResumeData.image;

  return (
    <div style={{ marginBottom: 3 + 'rem' }}>
      <Jumbotron image={jumboImage} title={jumboTitle} />
      <center style={{ marginTop: 3 + 'rem' }}>
        <a
          href='https://u.pcloud.link/publink/show?code=XZmLriXZ5s0NbDhswCX93zpTdtz505tY8ARX'
          target='_blank'
          rel='noreferrer'
        >
          <BtnStandard>Download Resume</BtnStandard>
        </a>
      </center>
      <Resume />
      <center>
        <a
          href='https://u.pcloud.link/publink/show?code=XZmLriXZ5s0NbDhswCX93zpTdtz505tY8ARX'
          target='_blank'
          rel='noreferrer'
        >
          <BtnStandard>Download Resume</BtnStandard>
        </a>
      </center>
    </div>
  );
};

export default ResumeView;
