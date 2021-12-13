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

import './Skillset.css';

const Skillset = () => {
  return (
    <div className='skillset'>
      <h1>Skillset</h1>
      <Container className='test'>
        <Grid container spacing={3} className='test'>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiHtml5 className='tech-item' />
              <div className='tech-item__title '>HTML5</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiCss3 className='tech-item' />
              <div className='tech-item__title '>CSS3</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiJavascript className='tech-item' />
              <div className='tech-item__title '>JavaScript</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiVuedotjs className='tech-item' />
              <div className='tech-item__title '>Vue.js</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiVuetify className='tech-item' />
              <div className='tech-item__title '>Vuetify</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiReact className='tech-item' />
              <div className='tech-item__title '>React.js</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiMaterialui className='tech-item' />
              <div className='tech-item__title '>Material User Interface</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiBootstrap className='tech-item' />
              <div className='tech-item__title '>Bootstrap</div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card className='tech-item__card'>
              <SiExpress className='tech-item' />
              <div className='tech-item__title '>Express.js</div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Skillset;
