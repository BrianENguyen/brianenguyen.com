import { Link } from 'react-router-dom';
import './PrivacyDialog.css';

const PrivacyDialog = () => {
  return (
    <div className='privacy-dialog'>
      <p>
        I use Google Analytics, cookies, and other technologies to help me
        understand how you use this website.{' '}
        <Link to='/privacy-policy'>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default PrivacyDialog;
