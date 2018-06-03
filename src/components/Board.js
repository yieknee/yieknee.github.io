import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

//const BOARD_STATES = ['DISPLAY', 'ADD', 'DELETE'];

const URL = 'http://localhost:3000/boards';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'DISPLAY',
      cards: [],
    };
  }

  onAddClick = (event) => {
    event.preventDefault();
    this.setState({
      mode: 'ADD',
    });
  }

  componentDidMount() {
    axios.get(`${URL}${this.props.boardId}/cards`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.log(`Error: ${response.data}`);
      });
  }

  getCards = () => {
    return this.state.cards.map((card, index) => {
      return (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          image_url={card.image_url}
          />
      );
    });
  }

  addCard = (card) => {
    const cards = this.state.cards;
    cards.push(card);

    this.setState({
      cards,
    });
  }

  hideCard = () => {
    this.setState({
      mode: 'DISPLAY',
    });
  }

  render() {
    return (
      <main className="board">
        {this.getCards()}

        <NewCardForm
          addCardCallback={this.addCard}
          hideFormCallback={this.hideCard}
          visibility={this.state.mode === 'ADD' ? 'shown-modal' : 'hidden-modal' }
          />

        <a href="#" className="float" onClick={this.onAddClick}>
            <i className="fa fa-plus my-float"></i>
          </a>
      </main>

    );
  }
}

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
};

export default Board;
