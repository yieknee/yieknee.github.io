import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

  showImage = () => {
    if (this.props.image_url) {
      return (
          <img src={this.props.image_url} alt="Inspiration" />
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
        <h2 className="centered title">{this.props.title}</h2>
        <span
          data-card-id={this.props.id}
          onClick={(event) => this.props.deleteCardCallback(event.target.dataset.cardId)}
          className="delete">×</span>
        <p className="content">{this.props.content}  </p>
        {this.showImage()}
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image_url: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
