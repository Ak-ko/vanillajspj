const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hex = "#";
    for(let i=0; i<6; i++){
        hex += colors[getRandomNumber()];
    }
    document.body.style.backgroundColor = hex
    color.textContent = hex;
    color.style.color = hex;
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}