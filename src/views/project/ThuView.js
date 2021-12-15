import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import ContentWrapper from '../../components/UI/ContentWrapper';
import './ThuView.css';
const ThuView = () => {
  const jumboTitle = "Thu Nguyen's Website";

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <ContentWrapper>
        <p className='thu-website__description'>
          <b>Thu Nguyen</b> is currently a college student studying at Cypress
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
      <Container maxWidth='md' className='thu-website'>
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639545745/BEN_Website/projects/thuhnguyen_cov4jp.png'
          className='thu-website__image'
        />
        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1639545839/BEN_Website/projects/thuhnguyenresume_xmwppk.png'
          className='thu-website__image'
        />
      </Container>
    </div>
  );
};

export default ThuView;
