import React from 'react';
import './Quote.css';

const Quote = () => {
  return (
    <div
      className='quote'
      data-aos='fade-up'
      data-aos-once='true'
      data-aos-duration='3000'
    >
      <h1 className='quote__content'>
        A fulfilling life is not preoccupied with material objects, prestige, or
        power. It is a life that is filled with true friendships, sharing, and
        caring for each other.
      </h1>
      <p className='quote__author'>— Dharma Master Chen Yeng</p>
    </div>
  );
};

export default Quote;
