import { Grid, Container } from '@mui/material';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiVuetify,
  SiReact,
  SiMaterialui,
  SiBootstrap,
  SiExpress,
} from 'react-icons/si';

import TechCard from '../UI/TechCard';
import './Skillset.css';

const Skillset = () => {
  return (
    <div className='skillset'>
      <Container>
        <h1 className='skillset__header'>Skillset</h1>
        <h1 className='skillset__description'>
          Languages / Frameworks / Libraries that I use
        </h1>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='HTML5' image={<SiHtml5 />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='CSS3' image={<SiCss3 />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='JavaScript' image={<SiJavascript />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Vue.js' image={<SiVuedotjs />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Vuetify' image={<SiVuetify />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='React' image={<SiReact />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Material UI' image={<SiMaterialui />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Bootstrap' image={<SiBootstrap />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Express.js' image={<SiExpress />} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Skillset;
