const dhkArr = ["Dhaka", 400, 20000000, true, "Bangladesh"];
console.log(dhkArr[4]);

const studentNames = ['Abul', 'Babul', 'Kabul', 'Dabul', 'Fahim', 'Sabiha'];

/* 
console.log(studentNames[0]);
console.log(studentNames[1]);
console.log(studentNames[2]);
console.log(studentNames[3]);
console.log(studentNames[4]);
console.log(studentNames[5]);
 */

console.log(studentNames.length);

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}

let a = 0;
while (a < studentNames.length) {
    console.log(studentNames[a]);
    a++;
}

const stidentInfo = [
    ['Abul', 3.92, 22],
    ['Babul', 3.82, 23],
    ['Kabul', 3.72, 24],
    ['Dabul', 3.62, 25],
    ['Fahim', 3.52, 26],
    ['Sabiha', 3.42, 27]
];

console.log(stidentInfo[5][2]);

for (let i = 0; i < stidentInfo.length; i++) {
    for (let j = 0; j < stidentInfo[i].length; j++) {
        console.log(stidentInfo[i][j]);
    }
}


