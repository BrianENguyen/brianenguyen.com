import { Grid } from '@mui/material';

import WebCard from './WebCard';
const WebCardList = () => {
  const cardContent = [
    {
      title: 'Portfolio',
      description: 'Feel free to take a look at projects that I have done',
      linkText: 'View portfolio',
      link: '/portofilio',
    },
    {
      title: 'Resume',
      description: 'View my resume',
      linkText: 'View resume',
      link: '/resume',
    },
    {
      title: 'Portfolio',
      description: 'Feel free to take a look at projects that I have done',
      linkText: 'View portfolio',
      link: '/portofilio',
    },
  ];

  return (
    <div>
      <Grid container spacing={3}>
        {cardContent.map((content, i) => (
          <Grid item xs={12} md={4}>
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
