const sortAnswers = (arrayOfAnswers) => {
  let fromSeller = []
  let notFromSeller = []
  arrayOfAnswers.forEach((answer) => {
    if (answer.answerer_name === "Seller") {
      fromSeller.push(answer)
    } else {
      notFromSeller.push(answer)
    }
  })

  let sortSeller = fromSeller.sort((a, b) => {
    return b.helpfulness - a.helpfulness
  })
  let notFromSellerSorted = notFromSeller.sort((a, b) => {
    return b.helpfulness - a.helpfulness
  })

  let fullySortedArray = sortSeller.concat(notFromSellerSorted)
  return fullySortedArray

}

export default sortAnswers;