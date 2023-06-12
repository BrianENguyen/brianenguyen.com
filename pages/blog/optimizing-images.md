

# Optimizing Images for Your Website

> 23 Jan, 2022 · 3 min

The use of website images is one of the major factors that contribute to slow
loading of web pages. In this blog, I discuss the reasons behind how images can
affect website speed and describe the methods I use to optimize images on my
sites, thus improving their load speed times.


## Image Downloads

When you visit a web page that contains images, your device sends a request to
the server for information about the page. The server responds with the
necessary files to display the page, including HTML, CSS, JavaScript, images,
and other components. This process is similar to downloading a video game or a
movie online. The larger the file size, the longer it takes to download. This
concept also applies to websites.

Images are typically large files by default, and if they are not optimized, they
can take longer to download, resulting in slower website performance.


## Compressing Images and WebP Format

To optimize images, the first step is to compress the image files using online
file compressors. I recommend [compressor.io](https://compressor.io/). It&rsquo;s a good idea to have a copy of
the original, uncompressed file in case for other uses.

Once the files are compressed, the next step is to convert them to WebP format
using an online file converter such as [convertio.co](https://convertio.co/). The WebP format is 26%
smaller than PNG images while maintaining the same quality, making it essential
for website development.


## Lazy Loading Images

By default, when you visit a web page, all the images on that page will download from the server. This isn&rsquo;t a big deal on pages with only a few images, but it can be a problem on pages with lots of content that require scrolling, like this one.

Why is it a problem? Let&rsquo;s say you load into a large page with many images, but
then you decide to visit another page without scrolling all the way down. In
that case, *all the images on the page have already been loaded, even if you
didn&rsquo;t see them*. This wastes your time and server resources.

To solve this problem, we can use lazy loading, which means we only load images
when they&rsquo;re in view. Lazy loading helps us reduce loading time and saves server
resources. To implement lazy loading with the `<img />` HTML tag, you can use the
loading attribute and set its value to `lazy`.

    <img src="example.webp" loading="lazy"/>


## Improving Load Times for Mobile Users

By now, you already know how to optimize images to improve load times, but
there&rsquo;s more you can do. Images have fixed properties, such as size, that don&rsquo;t
change regardless of the user&rsquo;s device. This may cause longer load times on
mobile devices, where a smaller image would suffice without losing quality.

To address this, you can use dynamically rendered images. On my website, I have
two versions of the same image, one full-sized and one scaled down to 600 pixels
for mobile users. The code I use, specific to React but adaptable to basic HTML,
determines the screen width and displays the appropriate version of the image
accordingly. This reduces the file size to about 40 KB and speeds up the
download time.

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

To see this in action, go to any page on my website that has a jumbotron (large
image header), view the *Network* tab in the developer tools, and change the
screen size. You&rsquo;ll notice that the image switches to the smaller version for
mobile devices, improving the loading time.


## Cloud-Based Image Management Services

Finally, utilizing cloud-based image management services can offer benefits for
improving image load times. Storing image files within the project itself can
require more download time, making cloud-based servers a more reliable option. A
specific service that I use is [cloudinary.com](https://cloudinary.com/). This service not only improves my
site&rsquo;s load speed and makes file management easier, but also comes with various
tools for manipulating images. I mainly use the scaling and brightness
adjustment tools for my images.


## Conclusion

To recap, you would need to follow these steps to help optimize your images:

1.  Compress your images
2.  Convert your images WebP format (if not already)
3.  Have a full-sized and mobile-sized version of an image if the full-sized version has a large content paint. Render them dynamically
4.  Use a cloud-based image service like Cloudinary to render your images

I hope you have learned something new from this and can use these tips to optimize and manage your images more effectively!

