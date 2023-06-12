import React, { useEffect } from 'react';
import './BlogView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { OptimizingPageTitle } from '../../helper/PageTitleData';
import Content from '../../../pages/blog/optimizing-images.md';

const OptmizeImagesView = () => {
  useEffect(() => {
    document.title = OptimizingPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css'
      />
      <PageContainer maxWidth='md' href='/blog'>
        <Content />
      </PageContainer>
    </AnimatedPage>
  );
};

export default OptmizeImagesView;
