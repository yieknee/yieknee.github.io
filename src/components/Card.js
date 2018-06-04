import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

  showImage = () => {
    if (this.props.image_url) {
      return (
          <img className="card-image" src={this.props.image_url} alt="Inspiration" />
      );
    } else {
    return (
      <div />
    );
   }
  }

  render() {
    return (
      <div className="card">
        <h2 className="centered title">{this.props.text}</h2>
        <span
          data-card-id={this.props.id}
          onClick={(event) => this.props.deleteCardCallback(event.target.dataset.cardId)}
          className="delete">×</span>
        {this.showImage()}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
