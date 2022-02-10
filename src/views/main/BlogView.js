import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import { BlogData } from '../../components/Helper/JumbotronData';
import BlogList from '../../components/Blog/BlogList';
import AnimatedPage from '../../components/Animations/AnimatedPage';

const BlogView = () => {
  const jumboTitle = BlogData.title;
  const jumboImage = BlogData.image;
  const jumboDescription = BlogData.description;

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
