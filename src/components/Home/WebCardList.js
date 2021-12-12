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
      {cardContent.map((content, i) => (
        <WebCard
          title={content.title}
          description={content.description}
          linkText={content.linkText}
          link={content.link}
        />
      ))}
    </div>
  );
};

export default WebCardList;
