import React from 'react';
import { useEffect, useState } from 'react';
import { ErrorJumboData } from '../../../helper/JumbotronData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
import AnimatedPage from '../../../components/animations/AnimatedPage';
import PageContainer from '../../../components/ui/page-container/PageContainer';

const ErrorView = ({ title }) => {
  const [joke, setJoke] = useState({ setup: '', delivery: '' });
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Joke fetch error: ${err}`);
        setLoading(false);
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
          <section>
            <p>
              If this is a problem, then feel free to email me at{' '}
              <a href='mailto:brian.edison.nguyen@gmail.com'>
                brian.edison.nguyen@gmail.com
              </a>
              ,{' '}
              <a
                href='https://github.com/Buraiyen/brianenguyen.com/issues'
                target='_blank'
              >
                send an issue
              </a>
              ,{' '}
              <a
                href='https://github.com/Buraiyen/brianenguyen.com/pulls'
                target='_blank'
              >
                or submit a pull request on GitHub.
              </a>
            </p>
            <p>While you're here, here's a random joke: </p>
            {loading ? (
              <p>Loading joke...</p>
            ) : (
              /* 
              Sometimes the joke API doesn't fetch the joke
              properly so I have to put my own
              */
              <>
                <p>
                  {!joke.setup
                    ? 'Why did the developer quit his job?'
                    : joke.setup}
                </p>
                <p>
                  {!joke.delivery
                    ? "Because he didn't get arrays"
                    : joke.delivery}
                </p>
              </>
            )}
          </section>
        </PageContainer>
      </div>
    </AnimatedPage>
  );
};

export default ErrorView;
