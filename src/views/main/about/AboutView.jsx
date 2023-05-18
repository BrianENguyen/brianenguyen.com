import React from 'react';

import { useEffect } from 'react';
import Backstory from '../../../components/about/Backstory';
import Facts from '../../../components/about/Facts';
import ImageGallery from '../../../components/about/ImageGallery';
import Quote from '../../../components/about/quote/Quote';
import { AboutJumboData } from '../../../helper/JumbotronData';
import { AboutPageTitle } from '../../../helper/PageTitleData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../../components/animations/AnimatedPage';

const AboutView = () => {
  useEffect(() => {
    document.title = AboutPageTitle;
  }, []);

  const jumboTitle = 'About Me';
  const jumboImage = AboutJumboData.src;
  const jumboImageMobile = AboutJumboData.srcMobile;

  return (
    <AnimatedPage>
      <div className='about'>
        <Jumbotron
          title={jumboTitle}
          src={jumboImage}
          srcMobile={jumboImageMobile}
        />
        <Quote />
        <Facts />
        <Backstory />
        <ImageGallery />
      </div>
    </AnimatedPage>
  );
};

export default AboutView;
