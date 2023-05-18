import React from 'react';

import AnimatedPage from '../../../components/animations/AnimatedPage';
import BlogList from '../../../components/blog/BlogList';
import { BlogJumboData } from '../../../helper/JumbotronData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';
import { useEffect } from 'react';
import { BlogPageTitle } from '../../../helper/PageTitleData';

const BlogView = () => {
  useEffect(() => {
    document.title = BlogPageTitle;
  }, []);

  const jumboTitle = BlogJumboData.title;
  const jumboImage = BlogJumboData.src;
  const jumboImageMobile = BlogJumboData.srcMobile;
  const jumboDescription = BlogJumboData.description;

  return (
    <AnimatedPage>
      <div className='blog'>
        <Jumbotron
          title={jumboTitle}
          src={jumboImage}
          srcMobile={jumboImageMobile}
          description={jumboDescription}
        />
        <BlogList />
      </div>
    </AnimatedPage>
  );
};
export default BlogView;
