

var age = -14;

if(age <= 12 && age >= 0) {
    console.log("You are a child");
}else if (age <= 19 && age >= 13) {
    console.log("You are a teenager");
}else if (age <= 30 && age >= 20) {
    console.log("You are a young adult");
}else if(age <= 60 && age >= 31) {
    console.log("You are an adult");
}else if(age <= 150 && age >= 61) {
    console.log("You are an old person");
}else{
    console.log("Your are not in this world!");
}

//  switch statement
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function shaon(isStudent) {
    switch (isStudent) {
        case true:
            return "Ticket costs 5$";
        case false:
            return "Ticket costs 10$";
    }
    return "Invalid Human";
}

console.log(shaon(true));

readline.question('Enter a number between 1 and 7: ', number => {
    switch(+number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break; 
        case 3:
            console.log("Wednesday");
            break; 
        case 4:
            console.log("Thursday");
            break; 
        case 5:
            console.log("Friday");
            break; 
        case 6:
            console.log("Saturday");
            break; 
        case 7:
            console.log("Sunday");
            break; 
        default:
            console.log("Invalid day");
    }
    readline.close();
});




