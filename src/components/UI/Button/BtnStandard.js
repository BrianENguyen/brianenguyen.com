import './Buttons.css';

const BtnStandard = (props) => {
  return <button className='btn btn-standard'>{props.children}</button>;
};

export default BtnStandard;
