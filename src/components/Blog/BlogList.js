import BlogCard from './BlogCard';
import BlogData from '../Helper/BlogData';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
const BlogList = () => {
  return (
    <div className='blog-list'>
      <Container>
        <Grid container>
          {BlogData.map((blog, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <BlogCard
                title={blog.title}
                description={blog.description}
                image={blog.image}
                link={blog.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BlogList;
