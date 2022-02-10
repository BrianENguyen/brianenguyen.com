import classes from './Blog.module.css';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  return (
    <div className={classes['blog-card']}>
      <h1 className={classes['blog-card__title']}>{props.title}</h1>
      <p className={classes['blog-card__description']}>{props.description}</p>
      <Link to='#' className={classes['blog-card__link']}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
