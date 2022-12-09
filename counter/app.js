const number = document.querySelector('.number');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const classes = e.currentTarget.classList;
        
        // checking which btn is clicked and what to do
        if(classes.contains('decrease')){
            count -= 1;
        }
        else if(classes.contains('increase')){
            count += 1;
        }
        else{
            count = 0;
        }
        // done

        // re-accessing colors
        if(count > 0){
            number.style.color = "green";
        }
        else if(count < 0) {
            number.style.color = "red";
        }
        else{
            number.style.color = "black";
        }
        //done

        number.textContent = count;
    
    })
})