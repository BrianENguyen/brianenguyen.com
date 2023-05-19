import './Jumbotron.css';

const Jumbotron = (props) => {
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
          rel='preload'
        />
      </picture>
      <div className='jumbotron__container'>
        <h1 className='jumbotron__title'>{props.title}</h1>
        <p className='jumbotron__description'>{props.description}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
