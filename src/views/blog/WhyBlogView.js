import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { WhyBlogPageTitle } from '../../components/Helper/PageTitleData';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = WhyBlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>Why I'm Blogging</h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>2022-02-11</p>
          <h2 className={classes['blog__header']}>The Purpose</h2>
          <p>
            Recently, I've noticed that many online programming tutorials and
            other tech discussions come from blogs. I've decided that I will
            write my blog as well. The purpose of this blog is to share my
            knowledge and my life, and to improve my writing skills. The blog
            can also let me learn programming concepts easily and know more
            about myself.
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
              <strong>my life</strong> - I love documenting my life to look back
              on my memories and cherish them. Additionally, this allows you to
              learn about more about me, apart from my web development passion.
            </li>
          </ul>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default WhyBlogView;
