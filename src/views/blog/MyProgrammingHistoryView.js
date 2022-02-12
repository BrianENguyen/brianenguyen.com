import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { MyProgrammingHistoryPageTitle } from '../../components/Helper/PageTitleData';

const MyProgrammingHistoryView = () => {
  useEffect(() => {
    document.title = MyProgrammingHistoryPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>My Programming History</h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>?????????????????</p>
          <p>
            Computer science is definitely one of the most interesting fields in
            this world. With the exponential growth of technology, code is
            basically everywhere, like gaming consoles, TV's, even the web
            browser you're using to view this blog. As someone who is fascinated
            with technology since my childhood, choosing a career path related
            to technology was the right choice for me
          </p>
          <p>
            My first step in my career was taking my Intro to Programming class
            in high school. I heard that there was game development there, which
            was something that interested me since I love video games. I decided
            to take that class, but after a few days in, I soon realize that was
            a mistake. The school council made my teacher instruct this class,
            but she didn't knew anything about programming. She would make us
            read the book and practice programming on there. To make matters
            even worse, the language that was taught in the book was C.
          </p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default MyProgrammingHistoryView;
