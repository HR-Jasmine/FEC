import React from 'react';
import './formInput.css'
import { useState } from 'react'

const FormInput = (props) => {

  const [focused, setFocused] = useState(false)
  const {handleChange, label, errormessage, extramessage, ...otherProps } = props

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className="form-input">
      <label className="labels">{label}</label>
      <input className="inputs" {...otherProps} onChange={handleChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span className="extra-msg">{extramessage}</span>
      <span className="error-msg">{errormessage}</span>
    </div>
  )
}

export default FormInput;