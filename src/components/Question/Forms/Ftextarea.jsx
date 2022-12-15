import React from 'react';
import {useState} from 'react'


const FormTextArea = (props) => {
  const {handleChange, value, label, ...otherTextProps} = props


  return (
    <div className="textarea">
      <label className="labels">{label}</label>
      <textarea {...otherTextProps} onChange={handleChange}
        cols="48" rows="8" className="text-ctn"></textarea>
      <span className="charCount">{value.length}/1000 Remaining</span>
    </div>
  )
}
export default FormTextArea;