import Backstory from '../components/About/Backstory';
import Skillset from '../components/About/Skillset';
const AboutView = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <Backstory />
      <Skillset />
    </div>
  );
};

export default AboutView;
