import { useEffect } from 'react';
import 'aos/dist/aos.css';
import classes from './BlogCard.module.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../../animations/animations.css';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes['blog-card']} data-testid='blog-card'>
      <div className={classes['blog-card__main-link']}>
        <Link to={props.date === 'WIP' ? '#' : props.link}>
          <div
            data-aos='reveal-down'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <img
              src={props.image}
              lazy-src={props.image}
              className={classes['blog-card__image']}
              decoding='async'
              rel='preload'
              loading='lazy'
              alt=''
            />
          </div>
          <h2
            className={classes['blog-card__title']}
            data-aos='reveal-left'
            data-aos-once='true'
          >
            {props.date === 'WIP' && <em>Coming soon:</em>} {props.title}
          </h2>
        </Link>
      </div>
      <div
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-once='true'
        data-aos-duration='1000'
      >
        <p className={classes['blog-card__description']}>{props.description}</p>
        <footer>
          &#127751;{' '}
          <span className={classes['blog-card__date']}>{props.date}</span>
        </footer>
        {props.date !== 'WIP' && (
          <Link to={props.link} className={classes['blog-card__link']}>
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
