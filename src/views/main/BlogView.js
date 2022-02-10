import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import { BlogData } from '../../components/Helper/JumbotronData';
import BlogCard from '../../components/Blog/BlogCard';
const BlogView = () => {
  const jumboTitle = BlogData.title;
  const jumboImage = BlogData.image;
  const jumboDescription = BlogData.description;

  return (
    <div className='blog'>
      <Jumbotron
        image={jumboImage}
        title={jumboTitle}
        description={jumboDescription}
      ></Jumbotron>
      <BlogCard></BlogCard>
    </div>
  );
};
export default BlogView;
