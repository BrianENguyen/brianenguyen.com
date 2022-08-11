import { useEffect } from 'react';
import { ErrorJumboData } from '../../helper/JumbotronData';
import { ErrorPageTitle } from '../../helper/PageTitleData';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../components/animations/AnimatedPage';
const ErrorView = () => {
  const jumboImage = ErrorJumboData.src;
  const jumboTitle = ErrorJumboData.title;
  const jumboDescription = ErrorJumboData.description;

  useEffect(() => {
    document.title = ErrorPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='error'>
        <Jumbotron
          image={jumboImage}
          title={jumboTitle}
          description={jumboDescription}
        />
      </div>
    </AnimatedPage>
  );
};

export default ErrorView;
