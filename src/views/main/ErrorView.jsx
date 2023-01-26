import { useEffect } from 'react';
import { ErrorJumboData } from '../../helper/JumbotronData';
import { ErrorPageTitle } from '../../helper/PageTitleData';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../components/animations/AnimatedPage';
const ErrorView = () => {
  useEffect(() => {
    document.title = ErrorPageTitle;
  }, []);
  const jumboImage = ErrorJumboData.src;
  const jumboImageMobile = ErrorJumboData.srcMobile;
  const jumboTitle = ErrorJumboData.title;
  const jumboDescription = ErrorJumboData.description;
  console.log(jumboImage);
  return (
    <AnimatedPage>
      <div className='error'>
        <Jumbotron
          src={jumboImage}
          srcMobile={jumboImageMobile}
          title={jumboTitle}
          description={jumboDescription}
        />
      </div>
    </AnimatedPage>
  );
};

export default ErrorView;
