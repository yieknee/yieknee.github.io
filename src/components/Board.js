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

  const deleteCard = (id) => {
    const newCardList = cardList.filter((card) => {
      return card.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${ id }`)
        .then((response) => {
          console.log(response)
          setErrorMessage(`Card ${ id } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ id }`);
        })
      setCardList(newCardList);
    }
  }

  useEffect(()=>{
    axios.get(API_CARD_URL)
      .then((response) => {
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [])
  
  const cardComponents = cardList.map((card) => {
    return(
      <Card
        key = {`${card.card.text}${card.card.id}`}
        id = {card.card.id}
        text = {card.card.text}
        emoji = {card.card.emoji}
        onClickCallback = {deleteCard}
      />
    )
  })

  return (
    <div>
      {cardComponents}
      <NewCardForm/>
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
