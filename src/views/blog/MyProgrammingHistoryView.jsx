import React from 'react';
// import classes from './BlogView.module.css';
import PageContainer from '../../components/ui/page-container/PageContainer';
import './BlogView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { useEffect } from 'react';
import { MyProgrammingHistoryPageTitle } from '../../helper/PageTitleData';
// import Highlight from 'react-highlight';
import Content from '../../../pages/blog/programming-history.md';

const MyProgrammingHistoryView = () => {
  useEffect(() => {
    document.title = MyProgrammingHistoryPageTitle;
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

export default MyProgrammingHistoryView;
