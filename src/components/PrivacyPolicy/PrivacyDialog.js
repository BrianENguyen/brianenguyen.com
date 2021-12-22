import { Link } from 'react-router-dom';

import './PrivacyDialog.css';

const PrivacyDialog = () => {
  return (
    <div className='privacy-dialog'>
      <h1>Privacy Notice</h1>
      <p>
        I use Google Analytics, cookies, and other technologies to help me
        understand how you use this website.
      </p>
      <Link to='/privacy-policy'>Privacy Policy</Link>
    </div>
  );
};

export default PrivacyDialog;
