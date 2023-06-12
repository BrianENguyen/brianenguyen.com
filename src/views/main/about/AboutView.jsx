import React from 'react';

import { useEffect } from 'react';
import PageContainer from '../../../components/ui/page-container/PageContainer';
import Backstory from '../../../components/about/backstory/Backstory';
import Facts from '../../../components/about/facts/Facts';
import ImageGallery from '../../../components/about/image-gallery/ImageGallery';
import Quote from '../../../components/about/quote/Quote';
import { AboutJumboData } from '../../../helper/JumbotronData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../../components/animations/AnimatedPage';

const AboutView = ({ title }) => {
  useEffect(() => {
    document.title = title;
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
        <PageContainer href='/' maxWidth='lg'>
          <Quote />
          <Facts />
          <Backstory />
          <ImageGallery />
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default AboutView;
