import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import './WebCard.css';

const WebCard = (props) => {
  return (
    <Card className='webcard'>
      <CardContent>
        <h1>Test</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        <Link className='webcard__link' to='/contact'>
          Test
        </Link>
      </CardContent>
    </Card>
  );
};

export default WebCard;
