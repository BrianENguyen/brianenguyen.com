import React from 'react';

import Highlight from 'react-highlight';

import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { OptimizingPageTitle } from '../../helper/PageTitleData';

const OptmizeImagesView = () => {
  useEffect(() => {
    document.title = OptimizingPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css'
      />
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>
          Optimizing Images for Your Website
        </h1>
        <section className={classes['blog__text']}>
          <p className={classes['blog__date']}>2023-01-23</p>
          <p>
            The use of website images is one of the major factors that
            contribute to slow loading of web pages. In this blog, I discuss the
            reasons behind how images can affect website speed and describe the
            methods I use to optimize images on my sites, thus improving their
            load speed times.
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Image Downloads</h2>
          <p>
            When you visit a web page that contains images, your device sends a
            request to the server for information about the page. The server
            responds with the necessary files to display the page, including
            HTML, CSS, JavaScript, images, and other components. This process is
            similar to downloading a video game or a movie online. The larger
            the file size, the longer it takes to download. This concept also
            applies to websites.
          </p>
          <p>
            Images are typically large files by default, and if they are not
            optimized, they can take longer to download, resulting in slower
            website performance.
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Compressing Images and WebP Format
          </h2>
          <p>
            To optimize images, the first step is to compress the image files
            using online file compressors. I recommend
            <a href='https://compressor.io' target='_blank' rel='noreferrer'>
              compressor.io
            </a>
            . It's a good idea to have a copy of the original, uncompressed file
            in case for other uses.
          </p>
          <p>
            Once the files are compressed, the next step is to convert them to
            WebP format using an online file converter such as{' '}
            <a href='https://convertio.co/'>convertio.co</a>. The <em>WebP</em>{' '}
            format is 26% smaller than PNG images while maintaining the same
            quality, making it essential for website development.
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Lazy Loading Images</h2>
          <p>
            By default, when you visit a web page, all the images on that page
            will download from the server. This isn't a big deal on pages with
            only a few images, but it can be a problem on pages with lots of
            content that require scrolling, like this one.
          </p>
          <p>
            Why is it a problem? Let's say you load into a large page with many
            images, but then you decide to visit another page without scrolling
            all the way down. In that case,{' '}
            <em>
              all the images on the page have already been loaded, even if you
              didn't see them.
            </em>{' '}
            This wastes your time and server resources.
          </p>
          <p>
            To solve this problem, we can use lazy loading, which means we only
            load images when they're in view. Lazy loading helps us reduce
            loading time and saves server resources. To implement lazy loading
            with the <code>{'<img />'}</code> HTML tag, you can use the loading
            attribute and set its value to <code>lazy</code>.
          </p>
          <div style={{ fontSize: '1.2rem' }}>
            <Highlight language='html'>
              {`<img src="example.webp" loading="lazy"/>`}
            </Highlight>
          </div>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Improving Load Times for Mobile Users
          </h2>
          <p>
            Everything that we've discussed so far can already be implemented to
            dratstically improve your load times, but there's still more we can
            do.
          </p>
          <p>
            Every image has a certain file size. Take for example an image that
            is 1000x600 with a file size of 60 KB. These properties will not
            change no matter what device the user has. This works fine for
            desktop users, but this might result in a slightly longer load time
            for mobile users. It's not really necessary to load a full sized
            image on mobile when we can scale it down while retaining the same
            quality.
          </p>
          <p>
            This is where dynamically rendering images come in. On this website,
            I have two versions of the same image:
          </p>
          <div style={{ fontSize: '1.2rem' }}>
            <Highlight language='html'>
              {`
<picture>
  <source srcSet={props.src} media="(min-width: 600px)" />
  <img
    src={props.srcMobile}
    lazy-src={props.srcMobile}
    alt=""
    className="jumbotron__image"
    decoding="async"
    rel="preload"
  />
</picture>
              `}
            </Highlight>
          </div>
          <p>
            The code above (which is specific to React but can be implemented
            using basic HTML) gets the current screen width. If the screen width
            is at least 600 pixels, then the full-sized image will be displayed.
            Else, the image will automatically be scaled down to 600 pixels for
            mobile users. This 600 pixel image can be scaled down to ~40 KB,
            which means downloading it will be a lot faster
          </p>
          <p>
            You can look at this code in action on my website. Go to any main
            page on my website that has a jumbotron (aka the large image
            headers), view the <em>Network</em> tab, and change the size of the
            screen. You can see that if you are on a large screen size and you
            shrink the width down to less than 600 pixels, then a scaled-down
            version of that image gets downloaded from the server and rendered
            on the page. The same works if you initially start on mobile view
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Cloud-Based Image Management Services
          </h2>
          <p>
            Lastly, using cloud-based image management services offer benefits
            for improving image loads. The one that I specifically use is{' '}
            <a href='https://cloudinary.com/'>cloudinary.com</a>. Not only does
            this service improves my site's load speed and makes file management
            easier, but it comes with many different tools for manipulating
            images. The tools that I mainly use for my images are scaling and
            adjusting the brightness.
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Conclusion</h2>
          <p>
            To recap, you would need to follow these steps to help optimize your
            images:
            <ol>
              <li>Compress your images</li>
              <li>Convert your images WebP format (if not already)</li>
              <li>
                Have a full-sized and mobile-sized version of an image if the
                full-sized version has a large content paint. Render them
                dynamically
              </li>
              <li>
                Use a cloud-based image service like Cloudinary to render your
                images
              </li>
            </ol>
            I hope you've learned something new in this, and use these tricks to
            optimize and manage your images better
          </p>
        </section>
      </Container>
    </AnimatedPage>
  );
};

export default OptmizeImagesView;
