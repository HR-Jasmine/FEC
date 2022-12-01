import React from 'react';
import './styles/search.css'


const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search FAQs..." className="search-bar"/>
    </div>
  )
}

export default Search;