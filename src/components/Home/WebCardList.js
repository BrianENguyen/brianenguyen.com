import { Grid } from '@mui/material';

import WebCard from './WebCard';
const WebCardList = () => {
  const cardContent = [
    {
      title: 'About',
      description:
        'Get to know more about me, the technologies I use, and my future goals',
      linkText: 'About me',
      link: '/portofilio',
    },
    {
      title: 'Portfolio',
      description: 'Feel free to take a look at projects that I have worked on',
      linkText: 'View portfolio',
      link: '/portofilio',
    },
    {
      title: 'Resume',
      description:
        'View my resume to know more about my education, work experience, and more',
      linkText: 'View resume ',
      link: '/resume',
    },
    {
      title: 'Contact',
      description:
        "Get in touch we me for any reason, whether it'd be for services, inquiries or just chatting",
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
