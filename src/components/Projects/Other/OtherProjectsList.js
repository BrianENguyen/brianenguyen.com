import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  const otherProjects = [{ title: 'SIMD', link: '/' }];
  return (
    <div>
      {otherProjects.map((otherProject, i) => {
        <OtherProject
          key={i}
          title={otherProject.title}
          link={otherProject.link}
        />;
      })}
    </div>
  );
};

export default OtherProjectsList;
