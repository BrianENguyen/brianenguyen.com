import Jumbotron from '../components/UI/Jumbotron';

const ErrorView = () => {
  const jumboTitle = '404 Error';
  return (
    <div className='error'>
      <Jumbotron title={jumboTitle} />
    </div>
  );
};

export default ErrorView;
