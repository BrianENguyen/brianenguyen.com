import { Grid } from '@mui/material';

const ResumeProjects = () => {
  return (
    <div>
      <h2 className='resume__header'>Projects</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Remade Personal Portfolio |{' '}
            <span>
              <a href='#'>Test</a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>January 2022</h3>
        </Grid>
        <Grid item xs={12}>
          <p>
            Redesigned and redeveloped version of my old website using React.js,
            Material Design Framework, React Router, and EmailJS
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Thu Nguyen’s Website |{' '}
            <span>
              <a href='#'>Test</a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>December 2021</h3>
        </Grid>
        <Grid item xs={12}>
          <p>
            Personal website made for a colleague. Developed with React.js and
            Material UI. Utilizes states
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            CSULB Tzu Ching |{' '}
            <span>
              <a href='#'>Test</a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>January 2022</h3>
        </Grid>
        <Grid item xs={12}>
          <p>
            CSULB Tzu Ching is a collegiate volunteering organization that
            focuses on medicine, education, charity, and humanistic culture.
            Website developed using the Vue.js framework with single-page
            application architecture. Utilizes animations and Vuetify material
            design framework
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Personal Portfolio |{' '}
            <span>
              <a href='#'>Test</a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>January 2022</h3>
        </Grid>
        <Grid item xs={12}>
          <p>
            My personal portfolio that showcases my programming work. Developed
            with Embedded JavaScript, CSS, Bootstrap 4, JavaScript, and
            Nodemailer
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeProjects;
