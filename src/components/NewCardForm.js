import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';


class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      image_url: '',
    };
  }

  validators = {
    title: /([^\s]+)/,
    content: /([^\s]+)/,
    image_url: /^$|^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    const updatedState = this.state;
    updatedState[fieldName] = value;
    this.setState(updatedState);
  }

  fieldValid = (fieldName) => {
    return this.validators[fieldName].test(this.state[fieldName]);
  }

  onSubmit = (event) => {
    event.preventDefault();
    let allValid = true;
    ['title', 'content', 'image_url'].forEach((field) => {
      if (!this.fieldValid(field)) {
        allValid = false;
      }
    });

    if (allValid) {
      this.props.addCardCallback({
        title: this.state.title,
        content: this.state.content,
        image_url: this.state.image_url,
      });
    }

  }

  render() {
    console.log(`modal ${this.props.visibility}`);
    return (
      <div id="myModal" className={`modal ${this.props.visibility}`}>

        <div className="modal-content">
          <span onClick={this.props.hideFormCallback} className="close">&times;</span>
          <h2>Add New Card..</h2>
          <form onSubmit={this.onSubmit} >
            <div>
              <label htmlFor="title">Title</label>
              <input name="title" onChange={this.onFieldChange} value={this.state.title} />
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <textarea name="content" onChange={this.onFieldChange} value={this.state.content} />
            </div>
            <div>
              <label htmlFor="image_url">Image URL</label>
              <input name="image_url" onChange={this.onFieldChange} value={this.state.image_url} />
            </div>
            <button type="submit">Add Card</button>
          </form>
        </div>

      </div>
    );
  }
}

NewCardForm.propTypes = {
  visibility: PropTypes.string.isRequired,
  addCardCallback: PropTypes.func.isRequired,
}


export default NewCardForm;
