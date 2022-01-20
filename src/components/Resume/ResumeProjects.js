import { Grid } from '@mui/material';

const ResumeProjects = () => {
  return (
    <div>
      <h2 className='resume__header'>Projects</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Frontend Mentor Challenges |{' '}
            <span>
              <a
                href='https://bit.ly/BEN-frontend-mentor'
                target='_blank'
                rel='noreferrer'
              >
                bit.ly/BEN-frontend-mentor
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>
            January 2022 – Present
          </h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            Developed various front-end components from challenges provided by
            frontendmentor.io, using HTML, CSS, and JavaScript
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Remade Personal Portfolio |{' '}
            <span>
              <a
                href='https://bit.ly/BEN-Portfolio-Remade'
                target='_blank'
                rel='noreferrer'
              >
                bit.ly/BEN-Portfolio-Remade
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>January 2022</h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            Redesigned and redeveloped version of former portfolio using
            React.js, Material UI Framework, React Router, and EmailJS
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            CSULB Tzu Ching |{' '}
            <span>
              <a
                href='https://bit.ly/BEN-LBTC'
                target='_blank'
                rel='noreferrer'
              >
                bit.ly/BEN-LBTC
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>November 2021</h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            Website developed for CSULB Tzu Ching, a collegiate volunteering
            organization that focuses on medicine, education, charity, and
            humanistic culture. Developed with the Vue.js and Vuetify material
            design framework
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Senior Project: Kraken Bracket |{' '}
            <span>
              <a
                href='https://bit.ly/Kraken-Bracket'
                target='_blank'
                rel='noreferrer'
              >
                bit.ly/Kraken-Bracket
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>May 2020</h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            An alternative bracket-creation app, Kraken Bracket aims to provide
            a more streamlined service for users and to promote more social
            aspects between tournament players, spectators, and organizers
          </p>
          <ul>
            <li>Front-end developed with Vue.js</li>
            <li>
              Back-end developed with ASP .NET Core 2.2 for web API’s, along
              with .NET Core 2.2 for business rules/data access
            </li>
            <li>
              Integrated back-end data to the front-end for tournament bracket,
              authentication, and authorization modules
            </li>
            <li>
              Produced unit and E2E testing for various front-end and back-end
              features
            </li>
            <li>
              Taught all team members Vue.js fundamentals; improved productivity
              by 20%
            </li>
            <li>Followed Agile through Scrum Methodology</li>
            <li>
              Dealt with scope creep and resource creep. Developed remote work
              skills
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeProjects;
