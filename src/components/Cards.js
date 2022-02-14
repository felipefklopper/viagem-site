import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../images/alderaan.webp';
import image2 from '../images/bespin.jpeg';


function Cards() {
  return (
    <div className="cards">
        <h1>CONHEÇA A GALÁXIA POR INTEIRO!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                      src={image1}
                      text="Visite o planeta das belezas"
                      label='Alderaan'
                      path='/destinos'
                    />
                    <CardItem
                      src={image2}
                      text="O gigante gasoso e a cidade nas nuvens"
                      label='Bespin'
                      path='/destinos'
                    />
                                    
                </ul>
                <ul className="cards__items">
                    <CardItem
                      src={image1}
                      text="Explore the hidden etc"
                      label='Aventura'
                      path='/pacotes'
                    />
                    <CardItem
                      src={image1}
                      text="Explore the hidden etc"
                      label='Descansar'
                      path='/pacotes'
                    />
                    <CardItem
                      src={image1}
                      text="Explore the hidden etc"
                      label='Turismo'
                      path='/services'
                    />
                    <CardItem
                      src={image1}
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