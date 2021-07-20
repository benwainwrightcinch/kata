/*
 * Returns true when all the letters of 'otherword'
 * are contained within 'word'.
 * e.g.
 * 
 * scramble('foo', 'bar') -> false
 * scramble('foobar', 'bar') -> true
 * scramble('rkqodlw', 'world') -> true
 * scramble('cedewaraaossoqqyt', 'codewars') -> true
 * 
 * (Yes, this is originally from CodeWars)
 * 
 * scramble('katas', 'steak') -> false
 * 
 * Note: The final solution *should consider performance*
 * 
 */
export const scramble = (word: string, otherWord: string): boolean => {
  const otherWordArray = otherWord.split('')

  const initialState: { word: string, otherWord: string, hasFoundLetters: boolean[] } =
      { word, otherWord, hasFoundLetters: [] }

  otherWordArray.reduce((state, nextLetter) => {
    state.hasFoundLetters.push(state.word.includes(nextLetter))
    state.word = otherWord.split('').filter(match => match !== state.word)
  }, initialState)

  return otherWordArray.every(letter => {
    return word.includes(letter)
  })
}

