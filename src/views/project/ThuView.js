import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import ContentWrapper from '../../components/UI/ContentWrapper';
import './ThuView.css';
const ThuView = () => {
  const jumboTitle = "Thu Nguyen's Website";

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='xl' className='thu-website'>
        <ContentWrapper>
          <p>
            Thu Nguyen is currently a college student studying at Cypress
            College. She plans to transfer to Califonia State University,
            Fullerton to pursue a Bachelor's in Accounting. This website is made
            to get to know more about her, view her resume, and get in contact
            with her
          </p>
          <h2>Tech Stack</h2>
          <ul>
            <li>React</li>
            <li>Material UI</li>
            <li>React Router</li>
          </ul>
        </ContentWrapper>
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639545745/BEN_Website/projects/thuhnguyen_cov4jp.png'
          width='1000px'
        />
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639545839/BEN_Website/projects/thuhnguyenresume_xmwppk.png'
          width='1000px'
        />
      </Container>
    </div>
  );
};

export default ThuView;
