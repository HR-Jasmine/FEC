import React from 'react';

const FormTextArea = (props) => {
  const {handleChange, label, ...otherTextProps} = props

  return (
    <div>
      <label>{label}</label>
      <br/>
      <textarea {...otherTextProps} onChange={handleChange}></textarea>
    </div>
  )
}
export default FormTextArea;