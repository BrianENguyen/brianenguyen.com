import React from 'react';

import { Grid } from '@mui/material';

import WebCardData from '../../helper/WebCardData';
import WebCard from './WebCard';
const WebCardList = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {WebCardData.map((content, i) => (
          <Grid item xs={12} md={4} key={i}>
            <WebCard
              title={content.title}
              description={content.description}
              linkText={content.linkText}
              link={content.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WebCardList;
