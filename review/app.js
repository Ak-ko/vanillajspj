const users = [
    {
        id : 1,
        name : "John Doe", 
        img : "./person1.jpg",
        job : "Ux Designer",
        review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },

    {
        id : 2,
        name : "Minoe Clark", 
        img : "./person2.jpg",
        job : "Ui Designer",
        review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },

    {
        id : 3,
        name : "Ethen Doe", 
        img : "./person3.jpg",
        job : "Front End Developer",
        review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },

    {
        id : 4,
        name : "Aung Khant", 
        img : "./person4.jpg",
        job : "Full Stack Developer",
        review : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    },
]

const image = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

// for btns
const btns = document.querySelectorAll('.btn');

let currentUser = 0;

window.addEventListener('DOMContentLoaded', function (){
    getUserInfo();    
});

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget.classList;
        if(currentBtn.contains('prevbtn')){
            currentUser--;
            if(currentUser < 0){
                currentUser = users.length - 1;
            }
            getUserInfo();
        }
        else if(currentBtn.contains('nextbtn')){
            currentUser++;
            if(currentUser > users.length-1){
                currentUser = 0;
            }
            getUserInfo();
        }
        else {
            getRandomUser(users.length);
            getUserInfo();
        }        
    })
});

function getUserInfo(){
    const each_user = users[currentUser];
    image.src = each_user.img;
    author.textContent = each_user.name;
    job.textContent = each_user.job;
    info.textContent = each_user.review;
}

function getRandomUser(length){
    currentUser = Math.floor(Math.random()*length)
    return currentUser;
}