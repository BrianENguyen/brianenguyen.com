import { Container } from '@mui/material';
import '../components/PrivacyPolicy/PrivacyPolicy.css';

import PrivacyIntro from '../components/PrivacyPolicy/PrivacyIntro';
import PrivacyInformation from '../components/PrivacyPolicy/PrivacyInformation';
import PrivacyLog from '../components/PrivacyPolicy/PrivacyLog';
import PrivacyCookies from '../components/PrivacyPolicy/PrivacyCookies';
import PrivacyThirdParty from '../components/PrivacyPolicy/PrivacyThirdParty';
import PrivacyCCPA from '../components/PrivacyPolicy/PrivacyCCPA';
import PrivacyGDPR from '../components/PrivacyPolicy/PrivacyGDPR';

const PrivacyView = () => {
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

        <div>
          <h2>Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            The Site does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyView;
