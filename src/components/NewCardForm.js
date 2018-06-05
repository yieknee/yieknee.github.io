import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';


class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      image_url: '',
      errorMessages: '',
    };
  }

  validators = {
    text: /([^\s]+)/,
    image_url: /^$|^(https?:\/\/)?([\da-z.-]+).([a-z.]{2,6})([\/\w .-]*)*\/?$/,
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    const updatedState = this.state;
    updatedState[fieldName] = value;
    this.setState(updatedState);
  }

  fieldValid = (fieldName) => {
    console.log(`FieldName: ${fieldName}`);
    console.log(`valid: ${this.validators[fieldName].test(this.state[fieldName])}`);
    console.log(`Field Value: ${this.state[fieldName]}`);
    return this.validators[fieldName].test(this.state[fieldName]);
  }

  onSubmit = (event) => {
    event.preventDefault();
    let valid = false;
    if (this.fieldValid('text') || this.state.image_url.length > 0 && this.fieldValid('image_url')) {
      valid = true;
    }

    if (valid) {
      this.props.addCardCallback({
        text: this.state.text,
        image_url: this.state.image_url,
      });
      this.setState({
        text: '',
        image_url: '',
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
          <div className="validationErrors">
            {this.state.errorMessages}
          </div>
          <div >
            <form onSubmit={this.onSubmit} className="new-student-form" >
              <label htmlFor="text">Text</label>
              <textarea name="text" onChange={this.onFieldChange} value={this.state.text} />
              <label htmlFor="image_url">Image URL</label>
              <input name="image_url" onChange={this.onFieldChange} value={this.state.image_url} />
              <button type="submit">Add Card</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

NewCardForm.propTypes = {
  visibility: PropTypes.string.isRequired,
  addCardCallback: PropTypes.func.isRequired,
  hideFormCallback: PropTypes.func.isRequired,
}


export default NewCardForm;
