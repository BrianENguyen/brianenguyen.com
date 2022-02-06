import { ErrorData } from '../../components/Helper/JumbotronData';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

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
