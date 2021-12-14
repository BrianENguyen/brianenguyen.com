import './Jumbotron.css';

const Jumbotron = (props) => {
  const logo = (
    <img
      className='jumbotron__logo'
      src='https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-transparent_rintta.png'
      alt=''
    />
  );

  return (
    <div
      className='jumbotron'
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className='jumbotron__content'>
        {props.logo && logo}
        <h1 className='jumbotron__title '>{props.title}</h1>
      </div>
    </div>
  );
};

export default Jumbotron;
