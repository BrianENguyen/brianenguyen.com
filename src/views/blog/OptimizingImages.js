import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { WhyBlogPageTitle } from '../../helper/PageTitleData';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = WhyBlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>
          Optmizing Images for Your Website
        </h1>
        <section className={classes['blog__text']}>
          <p className={classes['blog__date']}>2023</p>
          <p>
            Website images are one of the biggest culprits to slowing down your
            web pages. In this blog, I discuss why images can slow down websites
            and my ways to optimize my sites' images to improve load speeds
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Image Downloads</h2>
          <p>
            When you visit any page that has images, you, the client, send a
            request to the server to retrieve information about the site's page.
            This includes files such as HTML, CSS, JavaScript, images, etc.
            Think of this like you are downloading a video game or a movie
            online. The larger the content, the more time it takes to download
            it. This applies to websites too.
          </p>
          <p>
            Images are generally large files, and if they aren't optimized, they
            could take time to download, and thus slow down sites
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Compressing Images and WebP Format
          </h2>
          <p>
            To optimize images, the first step that I do is compress using
            online file compressors. A website that I recommend is{' '}
            <a href='https://compressor.io' target='_blank' rel='noreferrer'>
              compressor.io
            </a>{' '}
            It's a good idea to have a copy of the original, uncompressed file
            in case you need any other uses for it.
          </p>
          <p>
            After I compressed the file, I then convert the image to WebP. The{' '}
            <em>WebP</em> format is 26% smaller in size compared to PNG images
            while maintaining the same quality.
          </p>
        </section>
      </Container>
    </AnimatedPage>
  );
};

export default WhyBlogView;
