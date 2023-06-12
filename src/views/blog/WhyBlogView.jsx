import React from 'react';
import './BlogView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { useEffect } from 'react';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { WhyBlogPageTitle } from '../../helper/PageTitleData';
import Content from '../../../pages/blog/why-i-blog.md';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = WhyBlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <PageContainer maxWidth='md' href='/blog'>
        <Content />
      </PageContainer>
    </AnimatedPage>
  );
};

export default WhyBlogView;
