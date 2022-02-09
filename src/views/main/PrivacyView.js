import { Container } from '@mui/material';
import { useEffect } from 'react';
import { PrivacyPageTitle } from '../../components/Helper/PageTitleData';
import PrivacyCCPA from '../../components/Privacy/Policy/PrivacyCCPA';
import PrivacyChildRights from '../../components/Privacy/Policy/PrivacyChildRights';
import PrivacyCookies from '../../components/Privacy/Policy/PrivacyCookies';
import PrivacyGDPR from '../../components/Privacy/Policy/PrivacyGDPR';
import PrivacyInformation from '../../components/Privacy/Policy/PrivacyInformation';
import PrivacyIntro from '../../components/Privacy/Policy/PrivacyIntro';
import PrivacyLog from '../../components/Privacy/Policy/PrivacyLog';
import '../../components/Privacy/Policy/PrivacyPolicy.css';
import PrivacyThirdParty from '../../components/Privacy/Policy/PrivacyThirdParty';

const PrivacyView = () => {
  useEffect(() => {
    document.title = PrivacyPageTitle;
  }, []);

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
