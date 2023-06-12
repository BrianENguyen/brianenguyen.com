import React, { useEffect, useState } from 'react';
import './BlogPostView.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import PageContainer from '../../components/ui/page-container/PageContainer';

const BlogPostView = ({ markdownFile, title }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    document.title = title;
    import(`../../../pages/blog/${markdownFile}.md`)
      .then((res) => {
        setContent(res.default);
      })
      .catch((err) => {
        console.log(`Failed to import Markdown: ${err}`);
      });
  }, [markdownFile]);

  return (
    <AnimatedPage>
      <PageContainer maxWidth='md' href='/blog'>
        {content && <>{content}</>}
      </PageContainer>
    </AnimatedPage>
  );
};

export default BlogPostView;
