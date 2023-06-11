import React from 'react';

import PageContainer from '../../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
import AnimatedPage from '../../../components/animations/AnimatedPage';
import { PortfolioJumboData } from '../../../helper/JumbotronData';
import { PortfolioPageTitle } from '../../../helper/PageTitleData';
import ProjectsList from '../../../components/projects/main/ProjectsList';
import OtherProjectsList from '../../../components/projects/other/OtherProjectsList';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';

const PortfolioView = () => {
  const jumboTitle = PortfolioJumboData.title;
  const jumboImage = PortfolioJumboData.src;
  const jumboImageMobile = PortfolioJumboData.srcMobile;

  useEffect(() => {
    document.title = PortfolioPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='portfolio'>
        <Jumbotron
          title={jumboTitle}
          src={jumboImage}
          srcMobile={jumboImageMobile}
        />
        <PageContainer maxWidth='xl'>
          <ProjectsList />
          <OtherProjectsList />
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default PortfolioView;
