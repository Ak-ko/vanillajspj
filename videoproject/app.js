const video = document.querySelector('.video-container');
const play_pause_btn = document.querySelector('.switch-btn');

const preloader = document.querySelector('.preloader');

play_pause_btn.onclick = () => {    
    if(!play_pause_btn.classList.contains('slide')){
        play_pause_btn.classList.add('slide');
        video.pause();
    }
    else{
        play_pause_btn.classList.remove('slide');
        video.play();
    }
};

window.addEventListener('load', function() {
    preloader.classList.toggle('hide-preloader');
});
