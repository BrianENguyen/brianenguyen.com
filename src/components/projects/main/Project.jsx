import { useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const photoCreditSection = (
    <div
      className='project__photo-credit'
      data-aos='reveal-up'
      data-aos-once='true'
      data-aos-duration='4000'
      data-aos-easing='ease-in-sine'
    >
      {props.credit && (
        <p>
          Photo by{' '}
          <a
            className='project__photo-credit '
            href={props.credit.link}
            target='_blank'
            rel='noreferrer'
          >
            {props.credit.name}
          </a>
        </p>
      )}
    </div>
  );

  return (
    <div className='project'>
      <div className='project__main'>
        <Link to={props.link}>
          <div data-aos='reveal-left' data-aos-once='true'>
            <img
              src={props.src}
              className='project__image'
              alt=''
              loading='lazy'
              width='600px'
            />
          </div>
          <div
            data-aos='reveal-up'
            data-aos-once='true'
            data-aos-duration='4000'
            data-aos-easing='ease-in-sine'
          >
            <h3 className='project__title'>{props.title}</h3>
          </div>
        </Link>
      </div>
      {props.credit && photoCreditSection}
    </div>
  );
};

export default Project;
