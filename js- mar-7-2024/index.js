function SumOfNumbers (n1, n2) {
    return n1 + n2;
}

function largestElement (arr) {
    return Math.max(...arr);
}

function countCharacter (str) {
    return str.length;
}

function arrSum (arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function oddOrEven (n) {
    return n % 2 === 0 ? "even" : "odd"; 
}

console.log(oddOrEven(19));