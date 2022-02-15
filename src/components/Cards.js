import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../images/alderaan.webp';
import image2 from '../images/bespin.jpeg';
import image3 from '../images/CoruscantBG.webp';
import image4 from '../images/naboo.webp';
import image5 from '../images/Theed.webp';


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
                      src={image3}
                      text="A capital da República Galáctica"
                      label='Coruscant'
                      path='/pacotes'
                    />
                    <CardItem
                      src={image4}
                      text="Conheça o planeta dos Gungans"
                      label='Naboo'
                      path='/pacotes'
                    />
                    <CardItem
                      src={image5}
                      text="Visite o Palácio da Casa Real de Naboo"
                      label='Theed'
                      path='/services'
                    />
                    
                                       
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards