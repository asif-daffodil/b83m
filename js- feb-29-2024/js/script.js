// get the value of an input filed who's id is userNumber

const form = document.getElementById('form');
const result = document.getElementById('result');
const cc = document.getElementById('cc');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userNumber = document.getElementById('userNumber').value;
    if(!parseInt(userNumber)){
        result.innerHTML = 'Please enter a valid number';
    }else{
        result.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            result.innerHTML += userNumber + ' x ' + i + ' = ' + (userNumber * i) + '<br>';
        }
    }
});

const cArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
cc.addEventListener('click', () => {
    let bgColor = "#";
    for (let i = 0; i < 6; i++) {
        bgColor += cArr[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = bgColor;
    result.innerHTML = "Background color: " + bgColor;
});


