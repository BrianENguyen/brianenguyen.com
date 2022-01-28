import { TitleChange } from '../../components/Helper/TitleChange';

import Quote from '../../components/About/Quote';
import Backstory from '../../components/About/Backstory';
import ImageGallery from '../../components/About/ImageGallery';
import Facts from '../../components/About/Facts';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

import { AboutData } from '../../components/Helper/JumbotronData';

const AboutView = () => {
  const jumboTitle = 'About Me';
  const jumboImage = AboutData.image;

  TitleChange('About | BEN');

  return (
    <div className='about'>
      <Jumbotron image={jumboImage} title={jumboTitle} />
      <Quote />
      <Facts />
      <Backstory />
      <ImageGallery />
    </div>
  );
};

export default AboutView;
