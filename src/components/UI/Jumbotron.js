import './Jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div
      className='jumbotron'
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div
        className={
          props.homeView ? 'jumbotron__content--home' : 'jumbotron__content'
        }
      >
        {props.logo}
        <h1 className='jumbotron__title '>{props.title}</h1>
        <p className='jumbotron__description'>{props.description}</p>
      </div>
    </div>
  );
};

export default Jumbotron;
