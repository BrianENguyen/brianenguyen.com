import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
const WhyBlogView = () => {
  return (
    <AnimatedPage>
      <div className={classes['blog-container']}>
        <h1 className={classes['blog-title']}>Why I'm Blogging</h1>
      </div>
    </AnimatedPage>
  );
};

export default WhyBlogView;
