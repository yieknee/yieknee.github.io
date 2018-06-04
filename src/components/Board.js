import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

//const BOARD_STATES = ['DISPLAY', 'ADD', 'DELETE'];

const URL = 'http://localhost:3000/boards/';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'DISPLAY',
      cards: [],
      message: '',
    };
  }

  onAddClick = (event) => {
    event.preventDefault();
    this.setState({
      mode: 'ADD',
    });
  }

  componentDidMount() {
    this.setState({
      message: 'Loading Cards',
    });

    axios.get(`${URL}${this.props.boardId}/cards`)
    .then((response) => {
      const cards = [];
      response.data.forEach((card) => {
        cards.push({
          title: card.card.title,
          content: card.card.content,
          image_url: card.card.image_url,
          id: card.card.id,
        });
      });
      this.setState({
        cards,
        message: '',
      });
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
          deleteCardCallback={this.deleteCard}
          id={card.id}
          />
      );
    });
  }



  renderFieldValidationErrors = (field, errorArray) => {
    const list = errorArray.map((message, index) => {
      console.log(`Error: ${message}`);
      return (
        <li key={`${field}-${index}`}>
          {message}
        </li>
      )
    });
    return (
      <div>
        <strong>{field}:</strong>
        <ul className="validation-errors">
          {list}
        </ul>
      </div>
    );
  }

  renderValidationErrors = (responseData) => {
    if (responseData['errors']) {

      const validationErrors = responseData['errors']
      const errorList = Object.keys(validationErrors).map((field) => {
        return (
          <div key={`${field}`}>
            {this.renderFieldValidationErrors(field, validationErrors[field])}
          </div>
        );
      });
      return (
        <div>
          {errorList}
        </div>
      );
    }
    else {
      return (
        <div />
      )
    }
  }

  deleteCard = (cardId) => {
    console.log(cardId);
    const cards = this.state.cards.filter((card) => card.id !== parseInt(cardId))
    this.setState({
      cards,
    });
    axios.delete(`${URL}${this.props.boardId}/cards/${cardId}`)
    .then(() => {
      this.setState({
        message: 'Card deleted',
      })
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        message: 'Cannot delete card',
      });
    });
  }


  addCard = (card) => {
    const cards = this.state.cards;
    cards.push(card);

    this.setState({
      cards,
      mode: 'DISPLAY',
    });

    axios.post(`${URL}${this.props.boardId}/cards`, card)
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {

      const message = (
        <div>
          <p>Cannot Add the Card</p>
          {this.renderValidationErrors( error.response.data)}
        </div>
      )
      this.setState({
        message,
      });
    });
  }

  hideCard = () => {
    this.setState({
      mode: 'DISPLAY',
    });
  }
  displayMessage = () => {
    if (this.state.message === '') {
      return (
        <div />
      );
    }
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>{this.state.message}</header>

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
      </div>
    );
  }
}

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
};

export default Board;
