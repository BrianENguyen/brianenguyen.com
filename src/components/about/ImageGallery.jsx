import React from 'react';
import { Container, ImageList, ImageListItem } from '@mui/material';
import { ImageGalleryData } from '../../helper/ImageGalleryData';
import AnimatedHeader from '../animations/AnimatedHeader';
const ImageGallery = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <h1 className='header'>Capturing Art Through the Lens</h1>
        <h2 className='subheader'>
          <AnimatedHeader>
            I am an avid photographer. Below are some photos from my recent
            adventures
          </AnimatedHeader>
        </h2>
        <ImageList variant='masonry' cols={3} gap={20}>
          {ImageGalleryData.map((image, i) => (
            <ImageListItem key={i}>
              <img
                src={`${image.src}?w=248&fit=crop&auto=format`}
                srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
                loading='lazy'
                style={{ borderRadius: '10px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};

export default ImageGallery;
