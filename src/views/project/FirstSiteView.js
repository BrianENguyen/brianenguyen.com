import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const FirstSiteView = () => {
  const jumboTitle = 'My Old Personal Website';

  return (
    <div className='old-site'>
      <Jumbotron title={jumboTitle} />
    </div>
  );
};

export default FirstSiteView;
