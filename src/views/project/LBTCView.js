import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const LBTCView = () => {
  const jumboTitle = 'CSULB Tzu Ching';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
    </div>
  );
};

export default LBTCView;
