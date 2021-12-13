import { Grid } from '@mui/material';
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

import './Skillset.css';

const Skillset = () => {
  return (
    <div className='skillset'>
      <h1>Skillset</h1>
      <Grid container spacing={3}>
        <Grid item xs={2} md={4}>
          <SiHtml5 className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiCss3 className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiJavascript className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiVuedotjs className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiVuetify className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiReact className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiMaterialui className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiBootstrap className='tech-item' />
        </Grid>
        <Grid item xs={2} md={4}>
          <SiExpress className='tech-item' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skillset;
