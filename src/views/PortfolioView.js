import Jumbotron from '../components/UI/Jumbotron';

const PortfolioView = () => {
  const jumboText = 'Portfolio';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240500/BEN_Website/jumbotron/BEN_code_hijtco.jpg';
  return (
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <h1>Portfolio</h1>
    </div>
  );
};

export default PortfolioView;
