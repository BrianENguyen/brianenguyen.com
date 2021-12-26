import Jumbotron from '../components/UI/Jumbotron';
import Resume from '../components/Resume/Resume';

const ResumeView = () => {
  const jumboText = 'Resume';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240498/BEN_Website/BEN_lagunabeach_k9dv2n.jpg';
  return (
    // TODO: resume
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <Resume />
    </div>
  );
};

export default ResumeView;
