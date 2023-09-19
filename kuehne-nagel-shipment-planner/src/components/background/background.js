import React from 'react';
import './background.css';
import videoSource from './vid.mp4';
import CardComponent from '../background/card/card';

function OverlayOfBackground() {
  // Define an array of card data
  const cardData = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuTuQtaVlZlUg_R9uAeneWgBnGSZu_KtP0czEqIyk&s",
      title: 'About Us',
      text: 'Explore',
    },
    {
      imageSrc: 'https://i.stack.imgur.com/dWsEO.png',
      title: 'CRUD Table',
      text: 'Here you will find example of CRUD page',
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/question-mark-icon-on-white-puzzle-royalty-free-image-917901148-1558452934.jpg?crop=1xw:0.84415xh;center,top&resize=1200:*',
      title: 'Q&A section',
      text: 'Question that might need answer',
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
          <p>You will see CRUD table, after you press "CRUD" and proceed to lower part of the page</p>
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

export default OverlayOfBackground;
