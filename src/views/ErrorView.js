import Jumbotron from '../components/UI/Jumbotron';

const ErrorView = () => {
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/b_black,o_70/v1620240515/BEN_Website/BEN_huntingtonbeach_ac9rzj.jpg';
  const jumboTitle = '404 Error';
  const jumboDescription =
    'The page that you are on does not or no longer exists. If this is an issue, then feel free to contact me';
  return (
    <div className='error'>
      <Jumbotron
        image={jumboImage}
        title={jumboTitle}
        description={jumboDescription}
      />
    </div>
  );
};

export default ErrorView;
