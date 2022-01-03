import { TitleChange } from '../components/Helper/TitleChange';

import Quote from '../components/About/Quote';
import Backstory from '../components/About/Backstory';
import Skillset from '../components/About/Skillset';
import Tools from '../components/About/Tools';
import ImageGallery from '../components/About/ImageGallery';
import Facts from '../components/About/Facts';
import Jumbotron from '../components/UI/Jumbotron';

const AboutView = () => {
  const jumboText = 'About Me';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1915,b_black,o_70/v1639358227/BEN_Website/jumbotron/BEN_3098_islkyr.jpg';

  TitleChange('About | BEN');

  return (
    <div className='about'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <Quote />
      <Facts />
      <Backstory />
      <ImageGallery />
      <Skillset />
      <Tools />
    </div>
  );
};

export default AboutView;
