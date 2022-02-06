import './Buttons.css';
const Button = (props) => {
  console.log(props.disabled);
  return (
    <button
      className={`btn  ${props.disabled ? 'btn-disabled' : props.className}`}
      disabled={props.disabled && true}
    >
      {props.children}
    </button>
  );
};

export default Button;
