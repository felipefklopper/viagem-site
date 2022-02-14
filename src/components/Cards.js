import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-5.jpg';
import image6 from '../images/img-6.jpg';
import image7 from '../images/img-7.jpg';
import image8 from '../images/img-8.jpg';
import image9 from '../images/img-9.jpg';

function Cards() {
  return (
    <div className="cards">
        <h1>CHECK OUT THESE EPIC DESTINATIONS!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                      src={image1}
                      text="Explore the hidden etc"
                      label='Aventura'
                      path='/services'
                    />
                    <CardItem
                      src={image2}
                      text="Explore the hidden etc"
                      label='Descansar'
                      path='/services'
                    />
                    <CardItem
                      src={image3}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />
                    <CardItem
                      src={image4}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />
                    <CardItem
                      src={image5}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />                    
                </ul>
                <ul className="cards__items">
                    <CardItem
                      src={image1}
                      text="Explore the hidden etc"
                      label='Aventura'
                      path='/services'
                    />
                    <CardItem
                      src={image2}
                      text="Explore the hidden etc"
                      label='Descansar'
                      path='/services'
                    />
                    <CardItem
                      src={image3}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />
                    <CardItem
                      src={image4}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />
                    <CardItem
                      src={image5}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards