import AnimatedPage from '../../components/Animations/AnimatedPage';
import BlogList from '../../components/Blog/BlogList';
import { BlogData } from '../../components/Helper/JumbotronData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

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
