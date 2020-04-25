import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


const Card = (props) => {

  return (
    <div className="card">
      <section className="card__content">
        <p className="card__content-text">{props.text}</p>
        {props.emoji?<p className="card__content-emoji">{emoji.getUnicode(props.emoji)}</p> : ""}
      </section>
      <button className="card__delete" onClick = {() => props.onClickCallback(props.id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

export default Card;
