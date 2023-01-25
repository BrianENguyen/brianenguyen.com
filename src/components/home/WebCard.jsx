import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import './WebCard.css';

const WebCard = (props) => {
  return (
    <Card className='webcard'>
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
