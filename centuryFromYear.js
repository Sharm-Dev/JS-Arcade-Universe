function solution(year) {
    const remaining = year / 100;
    const roundUp = Math.ceil(remaining)
    
    console.log(roundUp);

}

solution(1905);
solution(1700);
