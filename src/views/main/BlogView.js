import AnimatedPage from '../../components/animations/AnimatedPage';
import BlogList from '../../components/blog/BlogList';
import { BlogJumboData } from '../../helper/JumbotronData';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import { useEffect } from 'react';
import { BlogPageTitle } from '../../helper/PageTitleData';

const BlogView = () => {
  const jumboTitle = BlogJumboData.title;
  const jumboImage = BlogJumboData.src;
  const jumboDescription = BlogJumboData.description;

  useEffect(() => {
    document.title = BlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='blog'>
        <Jumbotron
          src={jumboImage}
          title={jumboTitle}
          description={jumboDescription}
        />
        <BlogList />
      </div>
    </AnimatedPage>
  );
};
export default BlogView;
