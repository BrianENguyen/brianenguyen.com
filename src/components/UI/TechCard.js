import Card from '@mui/material/Card';

import './TechCard.css';
const TechCard = (props) => {
  return (
    <Card className='tech-card'>
      <div className='tech-card__image'>{props.image} </div>
      <div className='tech-card__title'>{props.title}</div>
    </Card>
  );
};

export default TechCard;
