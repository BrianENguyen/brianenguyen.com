import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const YelpCamp = () => {
  const jumboTitle = 'YelpCamp';

  return (
    <div className='yelpcamp'>
      <Jumbotron title={jumboTitle} />
    </div>
  );
};

export default YelpCamp;
