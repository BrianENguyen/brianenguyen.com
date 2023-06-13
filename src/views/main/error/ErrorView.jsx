import React from 'react';
import { useEffect, useState } from 'react';
import { ErrorJumboData } from '../../../helper/JumbotronData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../../components/animations/AnimatedPage';
import PageContainer from '../../../components/ui/page-container/PageContainer';

const ErrorView = ({ title }) => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    document.title = title;
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json();
      })
      .then((jokeData) => {
        setJoke({ setup: jokeData.setup, delivery: jokeData.delivery });
      })
      .catch((err) => {
        console.log(`Joke fetch error: ${err}`);
      });
  }, []);

  const jumboImage = ErrorJumboData.src;
  const jumboImageMobile = ErrorJumboData.srcMobile;
  const jumboTitle = ErrorJumboData.title;
  const jumboDescription = ErrorJumboData.description;

  return (
    <AnimatedPage>
      <div className='error'>
        <Jumbotron
          src={jumboImage}
          srcMobile={jumboImageMobile}
          title={jumboTitle}
          description={jumboDescription}
        />
        <PageContainer maxWidth='sm' href='/'>
          {joke && (
            <div>
              <p>While you're here, here's a random joke: </p>
              <p>{joke.setup}</p>
              <p>{joke.delivery}</p>
            </div>
          )}
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default ErrorView;
