import { Container } from '@mui/material';
import { TitleChange } from '../components/Helper/TitleChange';

import '../components/Privacy/Policy/PrivacyPolicy.css';

import PrivacyIntro from '../components/Privacy/Policy/PrivacyIntro';
import PrivacyInformation from '../components/Privacy/Policy/PrivacyInformation';
import PrivacyLog from '../components/Privacy/Policy/PrivacyLog';
import PrivacyCookies from '../components/Privacy/Policy/PrivacyCookies';
import PrivacyThirdParty from '../components/Privacy/Policy/PrivacyThirdParty';
import PrivacyCCPA from '../components/Privacy/Policy/PrivacyCCPA';
import PrivacyGDPR from '../components/Privacy/Policy/PrivacyGDPR';
import PrivacyChildRights from '../components/Privacy/Policy/PrivacyChildRights';

const PrivacyView = () => {
  TitleChange('Privacy Policy | BEN');

  return (
    <div className='privacy'>
      <Container>
        <PrivacyIntro />
        <PrivacyInformation />
        <PrivacyLog />
        <PrivacyCookies />
        <PrivacyThirdParty />
        <PrivacyCCPA />
        <PrivacyGDPR />
        <PrivacyChildRights />
      </Container>
    </div>
  );
};

export default PrivacyView;
