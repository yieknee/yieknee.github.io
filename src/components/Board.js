import React, { useState,  useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => { 
  const API_CARD_URL = `${props.url}${props.bordName}/cards`

  const [cardList, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    axios.get(API_CARD_URL)
      .then((response) => {
        console.log(response.data)
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [])
  
  console.log(cardList)
  const cardComponents = cardList.map((card) => {
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

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.shape({
        id: PropTypes.integer,
        text: PropTypes.string.isRequired,
        emoji: PropTypes.string.isRequired
      })
    })
  )
};

export default Board;
