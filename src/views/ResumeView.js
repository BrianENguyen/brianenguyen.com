import Jumbotron from '../components/UI/Jumbotron';

const ResumeView = () => {
  const jumboText = 'Resume';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240498/BEN_Website/BEN_lagunabeach_k9dv2n.jpg';
  return (
    // TODO: resume
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <h1>Resume</h1>
    </div>
  );
};

export default ResumeView;
