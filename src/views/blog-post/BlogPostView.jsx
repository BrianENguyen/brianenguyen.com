import React, { useEffect, useState } from 'react';
import './BlogPostView.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../components/animations/animations.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import PageContainer from '../../components/ui/page-container/PageContainer';

const BlogPostView = ({ markdownFile, title }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    AOS.init();
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
      <PageContainer maxWidth='sm' href='/blog'>
        {content && (
          <div data-aos='fade-up' data-aos-once='true' data-aos-duration='2000'>
            {content}
          </div>
        )}
      </PageContainer>
    </AnimatedPage>
  );
};

export default BlogPostView;
