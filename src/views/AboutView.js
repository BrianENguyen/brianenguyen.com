import Quote from '../components/About/Quote';
import Backstory from '../components/About/Backstory';
import Skillset from '../components/About/Skillset';
import Tools from '../components/About/Tools';

const AboutView = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <Quote />
      <Backstory />
      <Skillset />
      <Tools />
    </div>
  );
};

export default AboutView;
