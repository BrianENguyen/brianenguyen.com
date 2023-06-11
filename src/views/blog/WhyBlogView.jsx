import React from 'react';
import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { useEffect } from 'react';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { WhyBlogPageTitle } from '../../helper/PageTitleData';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = WhyBlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <PageContainer
        style={{ marginTop: 200 + 'px' }}
        maxWidth='md'
        href='/blog'
      >
        <h1 className={classes['blog__title']}>Why I'm Blogging</h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>2022-02-11</p>
          <h2 className={classes['blog__header']}>The Purpose</h2>
          <p>
            Recently, I've observed that many online programming tutorials and
            tech discussions are presented through blogs. As a result, I have
            decided to start writing my own blog. The primary objectives of my
            blog are to share my knowledge and experiences, as well as to
            enhance my writing skills. Additionally, through writing blog posts,
            I can develop a better understanding of programming concepts and
            gain a deeper understanding of myself.
          </p>
          <h2 className={classes['blog__header']}>What can you expect?</h2>
          <p>I plan on providing my blogs with the following:</p>
          <ul>
            <li>
              <strong>programming tutorials</strong> - these will be centered
              around web development, but I will focus on other programming
              fields too
            </li>
            <li>
              <strong>my life</strong> - I enjoy documenting it to preserve my
              memories and share my experiences with others. This will give you
              a better understanding of me beyond my passion for web
              development.
            </li>
          </ul>
        </div>
      </PageContainer>
    </AnimatedPage>
  );
};

export default WhyBlogView;
