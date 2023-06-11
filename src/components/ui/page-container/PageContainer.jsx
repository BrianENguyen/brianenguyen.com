import Cd from '../cd/Cd';
import { Container } from '@mui/material';

const PageContainer = ({ maxWidth, children, href }) => {
  return (
    <Container maxWidth={maxWidth}>
      {children}
      <Cd href={href} />
    </Container>
  );
};
export default PageContainer;
