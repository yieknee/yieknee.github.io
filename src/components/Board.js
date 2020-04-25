import React, { useState,  useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => { 
  const API_CARD_URL = `${props.url}${props.bordName}/cards`
  const [cardList, setCardList] = useState([])
  const [message, setMessage] = useState(null);

  const deleteCard = (id) => {
    const newCardList = cardList.filter((card) => {
      return card.card.id !== id;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${ id }`)
        .then((response) => {
          setMessage(`Card ${ id } deleted`);
          console.log(message)
        })
        .catch((error) => {
          setMessage(`Unable to delete card ${ id }`);
          console.log(message)
        })
      setCardList(newCardList);
    }
  }

  const addCard = (card) => {
    const newCardList = [...cardList]

    axios.post(API_CARD_URL, card)
    .then((response) => {
      const newCard= response.data;
      newCardList.push({
        card: {
          id: newCard.card.id,
          text: card.text,
          emoji: card.emoji
        }
      });
      setCardList(newCardList);
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(error.message);
    });
  }

  useEffect(()=>{
    axios.get(API_CARD_URL)
      .then((response) => {
        const apiCardList = response.data;
        setCardList(apiCardList);
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
      });
  }, [API_CARD_URL])

  const cardComponents = cardList.map((card) => {
    return(
      <Card
        key = {card.card.id}
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
      <NewCardForm onSubmitCallback ={addCard}/>
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
        text: PropTypes.string,
        emoji: PropTypes.string
      })
    })
  )
};

export default Board;
