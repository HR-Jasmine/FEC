import React from 'react';
import '../styles/Question/search.css';

const Search = ({setFilteredQuestions, questions}) => {


  const search = (e) => {
    if(e.target.value.length >= 3) {
      return setFilteredQuestions(questions.filter((question) => {
        return question.question_body.toLowerCase().includes(e.target.value.toLowerCase())
      }))
    }
    return setFilteredQuestions(questions)
  }



  return (
    <div className="search-container" data-testid="search">
      <input type="text" placeholder="Have a question? Search for answers..." className="search-bar" onChange={search}/>
    </div>
  )
}

export default Search;