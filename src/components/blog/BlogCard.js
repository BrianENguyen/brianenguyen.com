import classes from './BlogCard.module.css';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  return (
    <div className={classes['blog-card']}>
      <div className={classes['blog-card__main-link']}>
        <Link to={props.date === 'WIP' ? '#' : props.link}>
          <img
            src={props.image}
            className={classes['blog-card__image']}
            alt=''
          />
          <h2 className={classes['blog-card__title']}>
            {props.date === 'WIP' && <em>Coming soon:</em>} {props.title}
          </h2>
        </Link>
      </div>
      <p className={classes['blog-card__description']}>{props.description}</p>
      <footer>
        &#127751;{' '}
        <span className={classes['blog-card__date']}>{props.date}</span>
      </footer>
      {props.date !== 'WIP' &&
        <Link to={props.link} className={classes['blog-card__link']}>
          Read More
        </Link>
      }
    </div>
  );
};

export default BlogCard;
