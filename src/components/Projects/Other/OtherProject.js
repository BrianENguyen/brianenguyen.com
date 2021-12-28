import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Aos from 'aos';

import './OtherProjects.css';

const OtherProject = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Card className='other-project-card' data-aos='zoom-out-up'>
      <CardContent className='other-project-card__content'>
        <h1>{props.title}</h1>
        <Link className='other-project-card__link' to={props.link}>
          View
        </Link>
      </CardContent>
    </Card>
  );
};

export default OtherProject;
