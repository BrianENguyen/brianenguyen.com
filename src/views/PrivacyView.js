import { Container } from '@mui/material';
import { TitleChange } from '../components/Helper/TitleChange';

import '../components/PrivacyPolicy/PrivacyPolicy.css';

import PrivacyIntro from '../components/PrivacyPolicy/PrivacyIntro';
import PrivacyInformation from '../components/PrivacyPolicy/PrivacyInformation';
import PrivacyLog from '../components/PrivacyPolicy/PrivacyLog';
import PrivacyCookies from '../components/PrivacyPolicy/PrivacyCookies';
import PrivacyThirdParty from '../components/PrivacyPolicy/PrivacyThirdParty';
import PrivacyCCPA from '../components/PrivacyPolicy/PrivacyCCPA';
import PrivacyGDPR from '../components/PrivacyPolicy/PrivacyGDPR';
import PrivacyChildRights from '../components/PrivacyPolicy/PrivacyChildRights';

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
