const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

btn.addEventListener('click', function() {
    const classes = links.classList;

    // if(classes.contains('show-links')){        
    //     classes.remove('show-links');                      
    // }
    // else {        
    //     classes.add('show-links');    
    // }

    // using toggle
    classes.toggle('show-links');
});