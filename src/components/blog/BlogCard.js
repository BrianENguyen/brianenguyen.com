import classes from './BlogCard.module.css';
import { Link } from 'react-router-dom';

/**
 * The blog card can be active or disabled depending on if it's
 * being worked on. Active allows the user to click on blog section
 * to view its content, whereas disabled prevents the user from
 * doing so
 *
 * If the card is disabled, then the photo won't dim when hovered
 * over, the title will have the text 'Coming Soon', and the
 * 'Read More' link won't appear
 * */
const BlogCard = (props) => {
  return (
    <div className={classes['blog-card']}>
      <div className={classes['blog-card__main-link']}>
        <Link to={props.date === 'WIP' ? '#' : props.link}>
          <img
            src={props.image}
            lazy-src={props.image}
            className={classes['blog-card__image']}
            decoding="async"
            rel="preload"
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
