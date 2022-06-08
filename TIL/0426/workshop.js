 // 주어진 문자열이 회문인지 판별하는 isPalindrome 함수를 완성하시오.
 function isPalindrome(str) {
    let result = true
    let word = ''
    let i = 0
    str = str.split(' ')
    for (value of str){
        word += value
    }        
    while (i < word.length/2){
        if (word[i] != word[word.length-(i+1)]){
            result = false
            break
        }
        i += 1
    }
    return result
  }

  // 출력
  console.log(
    isPalindrome('a santa at nasa'),  // true
    isPalindrome('google')  // false
  )