const colors = ["red", "blue", "green", "yellow"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomnumber = getRandomNumber();    
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    color.style.color = colors[randomnumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}