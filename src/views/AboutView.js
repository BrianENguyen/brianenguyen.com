import Quote from '../components/About/Quote';
import Backstory from '../components/About/Backstory';
import Skillset from '../components/About/Skillset';

const AboutView = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <Quote />
      <Backstory />
      <Skillset />
    </div>
  );
};

export default AboutView;
