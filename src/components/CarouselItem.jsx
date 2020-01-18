import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-más-64.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='./assets/navidad-foto.jpg' alt='imageItem' />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='play' />
        <img src={plusIcon} alt='más' />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114minutos</p>
    </div>
  </div>
);

export default CarouselItem;
