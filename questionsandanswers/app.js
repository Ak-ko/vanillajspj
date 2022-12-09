///////////////////////////////////////////////////////////
/////////// using selectors inside the element ////////////
///////////////////////////////////////////////////////////

const questions = document.querySelectorAll('.question');
// NodeList can loop directly
questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    // if we use document.querySelector, then click shows three answers continously.
        btn.addEventListener('click', () => {
            questions.forEach(item => {            
                if(item !== question){
                    item.classList.remove('show-text');
                };
            });
            question.classList.toggle('show-text')
        })
})

///////////////////////////////////////////
/////////// traversing the dom ////////////
////////////////////////////////////////////
// const question_btns = document.querySelectorAll('.question-btn');

// question_btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//     //     if(question.classList.contains('show-text')){
//     //         question.classList.remove('show-text');
//     //     }else{
//     //         question.classList.add('show-text');
//     //     }

//         question.classList.toggle('show-text');
//     })
// )}