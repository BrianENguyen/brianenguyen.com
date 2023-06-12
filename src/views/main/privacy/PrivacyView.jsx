import React from 'react';

import PageContainer from '../../../components/ui/page-container/PageContainer';
import { useEffect } from 'react';
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

const PrivacyView = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <AnimatedPage>
      <div className='privacy'>
        <PageContainer maxWidth='lg' href='/'>
          <PrivacyIntro />
          <PrivacyInformation />
          <PrivacyLog />
          <PrivacyCookies />
          <PrivacyThirdParty />
          <PrivacyCCPA />
          <PrivacyGDPR />
          <PrivacyChildRights />
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default PrivacyView;
