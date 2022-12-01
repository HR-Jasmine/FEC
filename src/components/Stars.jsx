import React from 'react';
import './styles/stars.css';

const Stars = ({rating}) => {
  const parseRating = (amount) => {
    let multAndFloorAndDivideAndTurnToPercentage = (Math.floor(amount * 4) / 4) * 20;
    return String(multAndFloorAndDivideAndTurnToPercentage) + '%';
  }

  let width = parseRating(rating);

  let styleObj = {
    "width": width
  };

  return(
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={styleObj}></div>
    </div>
  )
}

export default Stars;