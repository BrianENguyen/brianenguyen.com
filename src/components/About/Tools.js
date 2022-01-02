import { Grid, Container } from '@mui/material';
import {
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiCloudflare,
} from 'react-icons/si';

import TechCard from '../UI/TechCard';
import './Tools.css';

const Tools = () => {
  return (
    <div className='tools'>
      <Container>
        <h1 className='header'>Tools</h1>
        <h1 className='subheader'>
          Other technologies to help me build my websites
        </h1>
        <Grid container spacing={3} className='test'>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='VS Code' image={<SiVisualstudiocode />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Git' image={<SiGit />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='GitHub' image={<SiGithub />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <TechCard title='Cloudflare' image={<SiCloudflare />} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tools;
