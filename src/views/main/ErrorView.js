import { useEffect } from 'react';
import { ErrorData } from '../../components/Helper/JumbotronData';
import { ErrorPageTitle } from '../../components/Helper/PageTitleData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const ErrorView = () => {
  const jumboImage = ErrorData.image;
  const jumboTitle = ErrorData.title;
  const jumboDescription = ErrorData.description;

  useEffect(() => {
    document.title = ErrorPageTitle;
  }, []);

  return (
    <div className='error'>
      <Jumbotron
        image={jumboImage}
        title={jumboTitle}
        description={jumboDescription}
      />
    </div>
  );
};

export default ErrorView;
