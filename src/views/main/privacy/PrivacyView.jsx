import React from 'react';

import { Container } from '@mui/material';
import { useEffect } from 'react';
import { PrivacyPageTitle } from '../../../helper/PageTitleData';
import PrivacyCCPA from '../../../components/privacy/policy/PrivacyCCPA';
import PrivacyChildRights from '../../../components/privacy/policy/PrivacyChildRights';
import PrivacyCookies from '../../../components/privacy/policy/PrivacyCookies';
import PrivacyGDPR from '../../../components/privacy/policy/PrivacyGDPR';
import PrivacyInformation from '../../../components/privacy/policy/PrivacyInformation';
import PrivacyIntro from '../../../components/privacy/policy/PrivacyIntro';
import PrivacyLog from '../../../components/privacy/policy/PrivacyLog';
import '../../../components/privacy/policy/PrivacyPolicy.css';
import PrivacyThirdParty from '../../../components/privacy/policy/PrivacyThirdParty';
import AnimatedPage from '../../../components/animations/AnimatedPage';

const PrivacyView = () => {
  useEffect(() => {
    document.title = PrivacyPageTitle;
  }, []);

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
};

export default PrivacyView;
