import React from 'react';
import { CgClose } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './PrivacyDialog.css';

const PrivacyDialog = () => {
  const [isVisible, setVisibility] = useState(true);

  /**
   * useEffect is used to hide the dialog if the user visits / refreshes
   * the website (assuming that they have already clicked on the hide button).
   * Dialog will become visible again once the user does so at least 3 times
   */

  useEffect(() => {
    const item = localStorage.getItem('dialogHidden');
    if (!item) return;
    if (item >= 3) {
      setVisibility(true);
      localStorage.removeItem('dialogHidden');
      return;
    }
    setVisibility(false);
    let refreshCount = item;
    refreshCount = +refreshCount + 1;
    localStorage.setItem('dialogHidden', refreshCount);
  }, []);

  const visibilityHandler = () => {
    setVisibility(false);
    localStorage.setItem('dialogHidden', '1');
  };

  const dialogContent = (
    <div className='privacy-dialog'>
      <button className='privacy-dialog__close-btn'>
        <CgClose onClick={visibilityHandler} />
      </button>
      <p>
        I value your privacy. As of 14 Jun 2023, I no longer use cookies and
        other technologies to understand how you use this website.
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
