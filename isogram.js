let isogram = (word) => {
  let answer = true
  let lowerWord = word.toLowerCase()
  for (let i = 0; i < word.length; i ++) {
    for (let j = i + 1; j < word.length; j++) {
      if (lowerWord.charAt(i) == lowerWord.charAt(j)) {
      answer = false
      }
    }
  }
  console.log(answer);
}

isogram('Chicken')
