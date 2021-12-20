import { Grid } from '@mui/material';

import './Backstory.css';

const Backstory = () => {
  return (
    // FIXME: add a container. the mobile view looks very scuffed
    // TODO: add future goals
    <div className='backstory'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h2 className='backstory__header'>My Story</h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <p>
            {/* FIXME: sentence structure and expand more on this first paragraph */}
            I am based in California my entire life. I've been passionate about
            computers ever since I played video games when I was young. I knew
            that a career related to computers would be a perfect option for me
          </p>
          <p>
            I obtained a Bachelor's in Computer Science from California State
            University, Long Beach in 2020. From the moment I have written my
            first script in Python, I knew that coding is something that I want
            to do in my life. It has allowed me to challenge myself and to
            improve on my skills, not just in programming, but also on
            creativity and team-working
          </p>
          <p>
            After I have graduated from CSULB, I was a bit lost on what I wanted
            to do with my degree, since there are various routes that I could've
            taken. I ultimately decided with a front-end web developer role,
            which allows my to express my creativity in the websites I make
          </p>
          <p>
            I am currently working at Code Ninjas, Cerritos and Fullterton, as a
            coding instructor. Working here combines two of my passions:
            programming and working with kids. I have tutored students with
            Scratch, and JavaScript, Lua, and C# languages to help them build
            video games. In addition, I have developed and led my own coding
            camp that received 95% positive feedback from students.
          </p>
          <p>
            Apart from my programming passions, I formerly served as the
            president for the Tzu Chi Collegiate Association at CSULB. This
            volunteering organization focuses on humanitarian aid, medicine,
            education, and more. I have devoted over 300 hours of my time
            serving this organization and it has been a life-changing experience
            for me.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Backstory;
