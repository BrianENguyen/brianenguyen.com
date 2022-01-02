import { Container, ImageList, ImageListItem } from '@mui/material';
import { ImageGalleryData } from '../Helper/ImageGalleryData';
const ImageGallery = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <h1 className='header'>Glimpse into my life</h1>
        <h2 className='subheader'>Some things that I have done recently</h2>
        <ImageList variant='masonry' cols={3} gap={20}>
          {ImageGalleryData.map((image, i) => (
            <ImageListItem src key={i}>
              <img
                src={`${image.src}?w=248&fit=crop&auto=format`}
                srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};

export default ImageGallery;
