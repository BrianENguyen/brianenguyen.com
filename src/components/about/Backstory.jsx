import React from 'react';
import { Container, Grid } from '@mui/material';
import './Backstory.css';
import AnimatedHeader from '../animations/AnimatedHeader';

const Backstory = () => {
  return (
    <div className='backstory'>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <h1 className='backstory__header'>
              <AnimatedHeader>My Story</AnimatedHeader>
            </h1>{' '}
          </Grid>
          <Grid item xs={12} md={8}>
            <p>
              I obtained a Bachelor's in Computer Science from California State
              University, Long Beach in 2020. From the moment I wrote my first
              Python script in my introductory CS course, I knew that coding is
              something I wanted to do in my life. It has allowed me to
              challenge myself and improve my skills, not just in programming,
              but also in creativity and team-working. Furthermore, I am
              grateful to have learned a myriad of technologies and concepts,
              and have connected with many people who have similar goals.
            </p>
            <p>
              I am currently working at Code Ninjas, Cerritos and Fullterton, as
              a coding instructor and an assistant director. Working here
              combines two of my passions: programming and working with
              students. I have tutored students with JavaScript, Lua, and C#
              languages to help them build high-quality software. I have also
              taught web development at various district schools to over 400
              students.
            </p>
            <p>
              Apart from my programming passions, I formerly served as the
              president of the Tzu Chi Collegiate Association at CSULB. This
              volunteering organization focuses on humanitarian aid, medicine,
              education, and more. I have devoted over 300 hours of my time to
              serving this organization and it has been a life-changing
              experience for me.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Backstory;
