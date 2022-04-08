function solution(inputString) {
   
    let checkString = inputString.split('').reverse().join('');
    console.log(checkString === inputString);
}


solution("aabaa");
solution("abac");
solution("a");