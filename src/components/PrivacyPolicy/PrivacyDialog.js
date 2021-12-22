import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import './PrivacyDialog.css';

const PrivacyDialog = () => {
  const [isVisible, setVisibility] = useState(true);

  const visibilityHander = () => {
    setVisibility(false);
  };

  const dialogContent = (
    <div className='privacy-dialog'>
      <CgClose
        className='privacy-dialog__close-btn'
        onClick={visibilityHander}
      />
      <p>
        I use Google Analytics, cookies, and other technologies to help me
        understand how you use this website.{' '}
        <Link to='/privacy-policy'>Privacy Policy</Link>
      </p>
    </div>
  );
  return isVisible && dialogContent;
};

export default PrivacyDialog;
