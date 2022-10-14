import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { WhyBlogPageTitle } from '../../helper/PageTitleData';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = WhyBlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>Optmizing Images for Your Website</h1>
        <div className={classes['blog__text']}>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default WhyBlogView;
