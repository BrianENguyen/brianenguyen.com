import { useEffect } from 'react';
import Card from '@mui/material/Card';
import Aos from 'aos';

import './TechCard.css';
const TechCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Card className='tech-card' data-aos='zoom-out-up'>
      <div className='tech-card__image'>{props.image} </div>
      <div className='tech-card__title'>{props.title}</div>
    </Card>
  );
};

export default TechCard;
