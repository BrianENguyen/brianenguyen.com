import { Container, ImageList, ImageListItem } from '@mui/material';
import { ImageGalleryData } from '../Helper/ImageGalleryData';

const ImageGallery = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <h1 className='header'>Capturing Art Through the Lens</h1>
        <h2 className='subheader'>
          I am an avid photographer. Below are some photos from my recent
          adventures
        </h2>
        <ImageList variant='masonry' cols={3} gap={20}>
          {ImageGalleryData.map((image, i) => (
            <ImageListItem key={i}>
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
