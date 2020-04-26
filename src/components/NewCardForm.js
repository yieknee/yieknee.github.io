import React, { useState} from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    text: "",
    emoji: "",
  })

  const onInputChange = (event) => {
    const newFormFild = {...formFields}
    newFormFild[event.target.name] = event.target.value
    setFormFields(newFormFild)
  }

  const onFormSubmit = (event) =>{
    event.preventDefault()

    props.onSubmitCallback(formFields)
    setFormFields({
      text: "",
      emoji: "",
    })
  }

  return(
    <form className="new-card-form" onSubmit={onFormSubmit} >
      <div className ="new-card-form__header">
        <label className="new-card-form__form-label">Input your message</label>
        <input className = "new-card-form__form-textarea" 
          name="text"
          value={formFields.text}
          onChange = {onInputChange}
          type="text"
        
        />
      </div>
      <div className ="new-card-form__header">
          <p>
             <label className="new-card-form__form-select">Select Emoji</label>
             <select className="new-card-form__form-select" name = "emoji" onChange ={onInputChange}>
               <option value = {EMOJI_LIST[0]}>{emoji.getUnicode(EMOJI_LIST[0])}</option>
               <option value = {EMOJI_LIST[1]}>{emoji.getUnicode(EMOJI_LIST[1])}</option>
               <option value = {EMOJI_LIST[2]}>{emoji.getUnicode(EMOJI_LIST[2])}</option>
               <option value = {EMOJI_LIST[3]}>{emoji.getUnicode(EMOJI_LIST[3])}</option>
               <option value = {EMOJI_LIST[4]}>{emoji.getUnicode(EMOJI_LIST[4])}</option>
               <option value = {EMOJI_LIST[5]}>{emoji.getUnicode(EMOJI_LIST[5])}</option>
               <option value = {EMOJI_LIST[6]}>{emoji.getUnicode(EMOJI_LIST[6])}</option>
             </select>
          </p>
      </div>
      <div>
        <button className="new-card-form__form-button">Add Card</button>
      </div>
  </form>
  )
} 

NewCardForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
