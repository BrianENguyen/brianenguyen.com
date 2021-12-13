import './Jumbotron.css';

const Jumbotron = (props) => {
  return (
    <div
      className='jumbotron'
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h1 className='jumbotron__title'>{props.title}</h1>
    </div>
  );
};

export default Jumbotron;
