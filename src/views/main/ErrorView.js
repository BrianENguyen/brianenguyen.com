import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import { TitleChange } from '../../components/Helper/TitleChange';

import { ErrorData } from '../../components/Helper/JumbotronData';

const ErrorView = () => {
  TitleChange('404 | BEN');

  const jumboImage = ErrorData.image;
  const jumboTitle = ErrorData.title;
  const jumboDescription = ErrorData.description;

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
