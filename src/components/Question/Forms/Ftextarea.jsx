import React from 'react';


const FormTextArea = (props) => {
  const {handleChange, label, ...otherTextProps} = props

  return (
    <div className="textarea">
      <label className="labels">{label}</label>
      <textarea {...otherTextProps} onChange={handleChange} cols="48" rows="8"></textarea>
    </div>
  )
}
export default FormTextArea;