import Quote from '../components/Home/Quote';
import Passion from '../components/Home/Passion';
import Skillset from '../components/Home/Skillset';
import Tools from '../components/Home/Tools';

const HomeView = () => {
  return (
    <div className='home'>
      <Quote />
      <Passion />
      <Skillset />
      <Tools />
    </div>
  );
};

export default HomeView;
