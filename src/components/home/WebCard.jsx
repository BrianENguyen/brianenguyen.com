import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './WebCard.css';

const WebCard = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Card className='webcard' data-aos='fade-up' data-aos-once='true'>
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
