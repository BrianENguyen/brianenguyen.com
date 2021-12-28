import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Aos from 'aos';

import './WebCard.css';

const WebCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Card className='webcard' data-aos='zoom-in-up'>
      <CardContent>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link className='webcard__link' to={props.link}>
          {props.linkText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default WebCard;
