const sortQuestions = (arrayOfQuestions) => {
  return arrayOfQuestions.sort((a,b) => {
    return b.question_helpfulness - a.question_helpfulness
  })
}

export default sortQuestions;