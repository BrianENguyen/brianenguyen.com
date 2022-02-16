import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { MyProgrammingHistoryPageTitle } from '../../components/Helper/PageTitleData';

const VolunteeringTC = () => {
  useEffect(() => {
    document.title = MyProgrammingHistoryPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth="md">
        <h1 className={classes['blog__title']}>
          Volunteering with the Tzu Chi Foundation
        </h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>2022-02-??</p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default VolunteeringTC;
