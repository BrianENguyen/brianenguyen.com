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
          <h2 className={classes['blog__header']}>The Purpose</h2>
          <p>
            Something that I've noticed recently is that many tutorials that I
            find online come from blogs. I wanted to share my knowledge and my
            life, as well as improve my writing skills, so that's why I decided
            to create one as well.
          </p>
          <h2 className={classes['blog__header']}>What can you expect?</h2>
          <p>
            As of writing, I plan on providing my blogs with these kinds of
            content:
          </p>
          <ul>
            <li>
              <strong>programming tutorials</strong> - this will be mainly
              centered around web development, but I may focus on other aspects
              as well.
            </li>
            <li>
              <strong>my life</strong> - I love documenting my life so that I
              can look back on my memories and cherish them. Additionally, this
              gives you the opportunity to learn more about me.
            </li>
          </ul>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default WhyBlogView;
