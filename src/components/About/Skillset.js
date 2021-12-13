import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
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
      <h1>Skillset</h1>
      <Container className='test'>
        <Grid container spacing={3} className='test'>
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
