import BlogCard from './BlogCard';
import BlogData from '../Helper/BlogData';
const BlogList = () => {
  return (
    <div className='blog-list'>
      {BlogData.map((blog, i) => (
        <BlogCard
          key={i}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          link={blog.link}
        />
      ))}
    </div>
  );
};

export default BlogList;
