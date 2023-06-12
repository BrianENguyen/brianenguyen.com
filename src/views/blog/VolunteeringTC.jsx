import React from 'react';
import './BlogView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { useEffect } from 'react';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { VolunteeringTCPageTitle } from '../../helper/PageTitleData';
import Content from '../../../pages/blog/volunteering-tzu-chi.md';

const VolunteeringTC = () => {
  useEffect(() => {
    document.title = VolunteeringTCPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <PageContainer maxWidth='md' href='/blog'>
        <Content />
      </PageContainer>
    </AnimatedPage>
  );
};

export default VolunteeringTC;
