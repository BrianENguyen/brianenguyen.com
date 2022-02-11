import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
const WhyBlogView = () => {
  return (
    <AnimatedPage>
      <div className={classes['blog-container']}>
        <h1 className={classes['blog-title']}>Why I'm Blogging</h1>
        <div className={classes['blog-text']}>
          <h2 className={classes['blog-header']}>The Purpose</h2>
          <p>
            Something that I've noticed recently is that many tutorials that I
            find online come from blogs. I wanted to share my knowledge and my
            life, as well as improve my writing skills, so that's why I decided
            to create one as well.
          </p>
          <h2 className={classes['blog-header']}>What can you expect?</h2>
          <p>
            As of writing, I plan on providing my blogs with these kinds of
            content:
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default WhyBlogView;
