import Highlight from 'react-highlight';

import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { OptimizingPageTitle } from '../../helper/PageTitleData';

const WhyBlogView = () => {
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
          Optmizing Images for Your Website
        </h1>
        <section className={classes['blog__text']}>
          <p className={classes['blog__date']}>2023</p>
          <p>
            Website images are one of the biggest culprits in slowing down web
            pages. For this blog, I discuss why images can slow down websites
            and my ways to optimize my sites' images to improve load speed
            times.
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Image Downloads</h2>
          <p>
            When you visit any page that has images, you, the client, send a
            request to the server to retrieve information about the site's page.
            The server then responds with the necessary files to display the
            page, such as HTML, CSS, JavaScript, images, etc. Think of this like
            downloading a video game or a movie online. The larger the file
            size, the longer it takes to download it. This process applies to
            websites too.
          </p>
          <p>
            Images are generally large files by default, and if they aren't
            optimized, they could take longer to download, and thus slow down
            sites.
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Compressing Images and WebP Format
          </h2>
          <p>
            The first step to optimize images is compressing the image files
            using online file compressors. A website that I recommend for this
            process is{' '}
            <a href='https://compressor.io' target='_blank' rel='noreferrer'>
              compressor.io
            </a>
            . It's a good idea to have a copy of the original, uncompressed file
            in case for other uses.
          </p>
          <p>
            After compressing the file(s), the next step is to convert them to
            WebP format with an online file converter like{' '}
            <a href='https://convertio.co/'>convertio.co</a>. The <em>WebP</em>{' '}
            format is 26% smaller in size compared to PNG images while
            maintaining the same quality. Using WebP format is essentially
            necessary when developing websites.
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Lazy Loading Images</h2>
          <p>
            When you visit a page, any images that should appear on the page
            will download from the server by default. This action is not a big
            deal on pages that don't have much content, but this is an issue on
            large pages that require scrolling, like this one.
          </p>
          <p>
            Why is this an issue? Say you load into a large page with many
            contents. What if the moment you visit the page, you instead wanted
            visit another one?
            <em>
              Every single image that should appear on the page is already
              loaded, even if you didn't see it.{' '}
            </em>
            Why load images if you've never navigated to it? This is a waste of
            loading time from your end and a waste of server resources.
          </p>
          <p>
            To prevent this issue, we want to only load images once our screen
            is in view of where the image should be. This is where the concept
            of <em>lazy loading</em> is used. Lazy loading using objects or
            components only when they are needed.
          </p>
          <p>
            To lazy load using the <code>{'<img />'}</code> HTML tag, you would
            use an attribute called <code>loading</code> and set its value to{' '}
            <code>lazy</code>
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

export default WhyBlogView;
