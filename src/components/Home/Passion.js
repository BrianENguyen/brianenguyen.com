import { Grid, Container } from '@mui/material';

const Passion = () => {
  return (
    <div className='passion'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            *INSERT IMAGE*
          </Grid>
          <Grid item xs={6}>
            <h2>My passion is front-end web development</h2>
            <p>
              I love making websites look beautiful. I have years of experience
              being a web developer with many different technologies, such as
              HTML/CSS/JS, Vue, React, and more. If you need a website made,
              then feel free to reach out to me
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Passion;
