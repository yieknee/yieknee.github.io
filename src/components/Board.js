import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const cards = [
  {
    "card": {
      "id": 4733,
      "text": "You are smart!",
      "emoji": "heart"
    }
  },
  {
    "card": {
      "id": 4731,
      "text": "Yor are kind!",
      "emoji": "heart"
    }
  },
  {
    "card": {
      "id": 4515,
      "text": "You will get through this!",
      "emoji": "clap"
    }
  }
]

const Board = (props) => { 
  
  const cardComponents = cards.map((card) => {
    console.log(card.card.id)
    return(
      <Card
        key = {`${card.card.text}${card.card.id}`}
        id = {card.card.id}
        text = {card.card.text}
        emoji = {card.card.emoji}
      />
    )
  
  })

  return (
    <div>
      {cardComponents}
    </div>
  )
};

// Board.propTypes = {
//   url: PropTypes.string.isRequired,
//   boardName: PropTypes.string.isRequired,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       card: PropTypes.shape({
//         id: PropTypes.integer.isRequired,
//         text: PropTypes.string.isRequired,
//         emoji: PropTypes.string.isRequired
//       })
//     })
//   )
// };

export default Board;
