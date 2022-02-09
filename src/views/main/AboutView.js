import { useEffect } from 'react';
import Backstory from '../../components/About/Backstory';
import Facts from '../../components/About/Facts';
import ImageGallery from '../../components/About/ImageGallery';
import Quote from '../../components/About/Quote';
import { AboutData } from '../../components/Helper/JumbotronData';
import { AboutPageTitle } from '../../components/Helper/PageTitleData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const AboutView = () => {
  const jumboTitle = 'About Me';
  const jumboImage = AboutData.image;

  useEffect(() => {
    document.title = AboutPageTitle;
  }, []);

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
