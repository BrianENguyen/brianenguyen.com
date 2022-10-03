import './Jumbotron.css';

const Jumbotron = (props) => {
  return (
     <div className="jumbotron">
        <picture>
          <source src={props.src} media="(min-width: 600px)" />
          <img
            src={props.src}
            alt=""
            className="jumbotron__image"
            decoding="async"
            rel="preload"
          />
        </picture>
       <div className="jumbotron__container">
         <h1 className="jumbotron__title">{props.title}</h1>
         <p v-if="jumboData.description" className="jumbotron__description">
           { props.description }
         </p>
       </div>
     </div>
  );
};

export default Jumbotron;
