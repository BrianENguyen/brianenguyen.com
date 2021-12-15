import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './OtherProjects.css';

const OtherProject = (props) => {
  return (
    <Card className='other-project-card'>
      <CardContent>
        <h1>{props.title}</h1>
      </CardContent>
    </Card>
  );
};

export default OtherProject;
