import AnimatedPage from '../../components/animations/AnimatedPage';
import BlogList from '../../components/blog/BlogList';
import { BlogData } from '../../helper/JumbotronData';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';
import { useEffect } from 'react';
import { BlogPageTitle } from '../../helper/PageTitleData';

const BlogView = () => {
  const jumboTitle = BlogData.title;
  const jumboImage = BlogData.image;
  const jumboDescription = BlogData.description;

  useEffect(() => {
    document.title = BlogPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div className='blog'>
        <Jumbotron
          image={jumboImage}
          title={jumboTitle}
          description={jumboDescription}
        />
        <BlogList />
      </div>
    </AnimatedPage>
  );
};
export default BlogView;
