import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { ImageGalleryData } from '../../../helper/ImageGalleryData';
const ImageGallery = () => {
  return (
    <div data-testid='image-gallery'>
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
              alt={image.alt}
              aria-describedby={image.alt}
              loading='lazy'
              style={{ borderRadius: '10px' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
