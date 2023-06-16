import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../animations/animations.css';
import './Jumbotron.css';

const Jumbotron = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='jumbotron'>
      <picture>
        <source srcSet={props.src || ''} media='(min-width: 600px)' />
        <img
          src={props.srcMobile || ''}
          lazy-src={props.srcMobile || ''}
          alt=''
          className={props.srcMobile && 'jumbotron__image'}
          decoding='async'
          loading='lazy'
          rel='preload'
        />
      </picture>
      <div className='jumbotron__container'>
        <h1
          className='jumbotron__title'
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-duration='1000'
        >
          {props.title}
        </h1>
        <p
          className='jumbotron__description'
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-duration='1000'
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
