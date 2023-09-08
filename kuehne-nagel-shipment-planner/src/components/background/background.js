import React from 'react';
import './background.css';
import videoSource from './vid.mp4';
import CardComponent from '../card/card.js';

function FluidExample() {
  // Define an array of card data
  const cardData = [
    {
      imageSrc: './CardPictures/about.jpg',
      title: 'Card 1',
      text: 'This is the first card.',
    },
    {
      imageSrc: 'image2.jpg',
      title: 'Card 2',
      text: 'This is the second card.',
    },
    {
      imageSrc: 'image2.jpg',
      title: 'Card 2',
      text: 'This is the second card.',
    },
  ];

  return (
    <div className="video-background">
      <video autoPlay muted loop id="myVideo">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className='content-container'>
      <div className="content">
        <h1>Welcome to Kühne+Nagel unofficial CRUD page</h1>
        <p>My name is Vladislav Paškevitš, and I am bringing this page to you</p>
        <div className="cards-container">
          {cardData.map((card, index) => (
            <CardComponent
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FluidExample;
