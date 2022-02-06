import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './PrivacyDialog.css';

const PrivacyDialog = () => {
  const [isVisible, setVisibility] = useState(true);

  const visibilityHandler = () => {
    setVisibility(false);
  };

  const dialogContent = (
    <div className='privacy-dialog'>
      <button className='privacy-dialog__close-btn'>
        <CgClose onClick={visibilityHandler} />
      </button>
      <p>
        I use cookies and other technologies to help me understand how you use
        this website. <Link to='/privacy-policy'>Privacy Policy</Link>
      </p>
    </div>
  );
  return (
    isVisible && (
      <>
        {ReactDOM.createPortal(
          dialogContent,
          document.getElementById('overlay-root')
        )}
      </>
    )
  );
};

export default PrivacyDialog;
