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

  const matchingCharacters = otherWordArray.map(letter => {
    return word.includes(letter)
  })
  matchingCharacters.filter()

  return word.includes(otherWord)
}

