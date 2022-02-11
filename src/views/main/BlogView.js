import AnimatedPage from '../../components/Animations/AnimatedPage';
import BlogList from '../../components/Blog/BlogList';
import { BlogData } from '../../components/Helper/JumbotronData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import { useEffect } from 'react';
import { BlogPageTitle } from '../../components/Helper/PageTitleData';

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
