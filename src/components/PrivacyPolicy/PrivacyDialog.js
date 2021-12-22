import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { Grid } from '@mui/material';
import './PrivacyDialog.css';

const PrivacyDialog = () => {
  return (
    <div className='privacy-dialog'>
      <Grid container>
        <Grid item xs={11}>
          <p>
            I use Google Analytics, cookies, and other technologies to help me
            understand how you use this website.{' '}
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </p>
        </Grid>
        <Grid item xs={1}>
          <CgClose className='privacy-dialog__close-btn' />
        </Grid>
      </Grid>
    </div>
  );
};

export default PrivacyDialog;
