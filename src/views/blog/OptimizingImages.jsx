import React from 'react';

import Highlight from 'react-highlight';

import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { useEffect } from 'react';
import PageContainer from '../../components/ui/page-container/PageContainer';
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
      <PageContainer
        style={{ marginTop: 200 + 'px' }}
        maxWidth='md'
        href='/blog'
      >
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
            By now, you already know how to optimize images to improve load
            times, but there's more you can do. Images have fixed properties,
            such as size, that don't change regardless of the user's device.
            This may cause longer load times on mobile devices, where a smaller
            image would suffice without losing quality.
          </p>
          <p>
            To address this, you can use dynamically rendered images. On my
            website, I have two versions of the same image, one full-sized and
            one scaled down to 600 pixels for mobile users. The code I use,
            specific to React but adaptable to basic HTML, determines the screen
            width and displays the appropriate version of the image accordingly.
            This reduces the file size to about 40 KB and speeds up the download
            time.
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
            To see this in action, go to any page on my website that has a
            jumbotron (large image header), view the <em>Network tab</em> in the
            developer tools, and change the screen size. You'll notice that the
            image switches to the smaller version for mobile devices, improving
            the loading time.
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Cloud-Based Image Management Services
          </h2>
          <p>
            Finally, utilizing cloud-based image management services can offer
            benefits for improving image load times. Storing image files within
            the project itself can require more download time, making
            cloud-based servers a more reliable option. A specific service that
            I use is <a href='https://cloudinary.com/'>cloudinary.com</a>. This
            service not only improves my site's load speed and makes file
            management easier, but also comes with various tools for
            manipulating images. I mainly use the scaling and brightness
            adjustment tools for my images.
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
            I hope you have learned something new from this and can use these
            tips to optimize and manage your images more effectively!
          </p>
        </section>
      </PageContainer>
    </AnimatedPage>
  );
};

export default OptmizeImagesView;
