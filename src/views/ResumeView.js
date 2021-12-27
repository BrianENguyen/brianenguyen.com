import Jumbotron from '../components/UI/Jumbotron';
import Resume from '../components/Resume/Resume';
import BtnStandard from '../components/UI/Button/BtnStandard';

const ResumeView = () => {
  const jumboText = 'Resume';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240498/BEN_Website/BEN_lagunabeach_k9dv2n.jpg';
  return (
    <div style={{ marginBottom: 3 + 'rem' }}>
      <Jumbotron image={jumboImage} title={jumboText} />
      <center>
        <a
          href='https://u.pcloud.link/publink/show?code=XZ4BKaXZjSqBAzUDjlBJhTfrfj0uvYc9bp70'
          target='_blank'
          rel='noreferrer'
        >
          <BtnStandard>Download Resume</BtnStandard>
        </a>
      </center>
      <Resume />
      <center>
        <a
          href='https://u.pcloud.link/publink/show?code=XZ4BKaXZjSqBAzUDjlBJhTfrfj0uvYc9bp70'
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
