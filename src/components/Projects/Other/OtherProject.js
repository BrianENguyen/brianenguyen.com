import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import './OtherProjects.css';

// FIXME: add margins between cards
const OtherProject = (props) => {
  return (
    <Card className='other-project-card'>
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
