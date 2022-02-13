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
            even worse, the language that was taught in the book was C, which
            was difficult to learn as a beginner. This class made me hate
            programming because I thought it was this hard.
          </p>
          <p>
            After I graduated from high school, I decided to take a shot at
            programming again at California State University, Long Beach. In my
            introductory computer course, we've learned about Python, which was{' '}
            <em>way</em> easier than C. The first program that I was proud of
            was one that calculated the area, circumference, surface area, and
            volume using the radius from user input. That script made me realize
            that programming is what I wanted to do for my future
          </p>
          <p>
            When I graduated from my university in 2020, I was lost in what I
            wanted to do with my degree. I first decided to do full-stack
            development because my senior project class gave me exposure to it.
            I also decided to do Information Technology / system administration,
            because I recently started learning about Linux and making it my
            main operating system. I then realize those fields didn't interest
            me because they were too technical for me.
          </p>
          <p>
            It took me two years to finally decide what I wanted to:{' '}
            <strong>frontend development.</strong> This field allows me to
            express creativity in the applications I make. My sense of
            creativity and beauty comes from my passion in photography, and I
            hope to reflect that in my programming career.
          </p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default MyProgrammingHistoryView;
