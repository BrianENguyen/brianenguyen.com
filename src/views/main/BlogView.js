import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import { BlogData } from '../../components/Helper/JumbotronData';

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
    </div>
  );
};
export default BlogView;
