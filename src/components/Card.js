import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

  showImage = () => {
    if (this.props.image_url) {
      return (
        <div>
          <img src={this.props.image_url} alt="Inspiration" />`
        </div>
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
        <h2>{this.props.title}</h2>
        <p>{this.props.content}  </p>
        {this.showImage()}
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image_url: PropTypes.string,
};

export default Card;
