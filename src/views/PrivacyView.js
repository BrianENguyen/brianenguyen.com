import { Container } from '@mui/material';
import '../components/PrivacyPolicy/PrivacyPolicy.css';

import PrivacyIntro from '../components/PrivacyPolicy/PrivacyIntro';
import PrivacyInformation from '../components/PrivacyPolicy/PrivacyInformation';

const PrivacyView = () => {
  return (
    <div className='privacy'>
      <Container>
        <PrivacyIntro />
        <PrivacyInformation />
        <div>
          <h2>Log Files</h2>
          <p>
            The Site follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>
        </div>

        <div class='privacy-description'>
          <h2>Cookies and Web Beacons</h2>
          <p>
            Like any other website, the Site uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>

          <p>
            For more general information on cookies, please read{' '}
            <a href='https://www.privacypolicyonline.com/what-are-cookies/'>
              "What Are Cookies" from Cookie Consent
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Advertising Partners Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of the Site.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on the Site, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>

          <p>
            Note that the Site has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
        </div>
        <div>
          <h2>Third Party Privacy Policies</h2>

          <p>
            The Site's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{' '}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
        </div>

        <div>
          <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <ul>
            <li>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </li>
            <li>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </li>
            <li>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </li>
          </ul>
        </div>
        <h2>GDPR Data Protection Rights</h2>

        <div>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul>
            <li>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </li>
          </ul>
        </div>
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
