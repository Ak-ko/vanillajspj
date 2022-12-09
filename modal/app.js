const modal_btn = document.querySelector('.modal-btn');
const close_btn = document.querySelector('.close-btn');

const modal_overlay = document.querySelector('.modal-overlay');

modal_btn.addEventListener('click', () => {
    modal_overlay.classList.add('open-modal');
})

close_btn.addEventListener('click', () => {
    modal_overlay.classList.remove('open-modal');
})