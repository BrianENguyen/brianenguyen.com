import './Jumbotron.css';

const Jumbotron = (props) => {
  const logo = (
    <img
      src='https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-transparent_rintta.png'
      width='300px'
    />
  );

  return (
    <div
      className='jumbotron'
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      {props.logo && logo}
      <h1 className='jumbotron__title'>{props.title}</h1>
    </div>
  );
};

export default Jumbotron;
