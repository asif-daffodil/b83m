function jogFol (n1 = 2, n2 = 1) {
    return n1 + n2;
}

console.log(jogFol(6, 5));
console.log(jogFol(7, 3));
console.log(jogFol());
console.log(jogFol(5));

const biyogFol = function (n1, n2) {
    return n1 - n2;
}

console.log(biyogFol(6, 5));

const gunFol = (n1, n2) => {
    return n1 * n2;
}

console.log(gunFol(6, 5));

const vagFol = (n1, n2) => n1 / n2;

console.log(vagFol(20, 5));

function protikkha (n) {
    if(n == 0) {
        console.log(0);
        return ;
    }
    console.log(n--);
    protikkha(n);
}

protikkha(10);