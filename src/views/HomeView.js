import Quote from '../components/Home/Quote';
import About from '../components/Home/About';
import Skillset from '../components/Home/Skillset';
import Tools from '../components/Home/Tools';

const HomeView = () => {
  return (
    <div className='home'>
      <Quote />
      <About />
      <Skillset />
      <Tools />
    </div>
  );
};

export default HomeView;
