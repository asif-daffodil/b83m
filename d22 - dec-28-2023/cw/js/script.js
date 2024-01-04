const mainLi = document.getElementById('mainLi');
const myDiv = document.getElementById('myDiv');

mainLi.addEventListener('click', ()=>{
    myDiv.classList.toggle('hidden');
});

window.addEventListener('click', (e)=>{
    if(!mainLi.contains(e.target)){
        myDiv.classList.add('hidden');
    }
});

